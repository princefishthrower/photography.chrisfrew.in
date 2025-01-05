import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import dotenv from 'dotenv'
import {
  S3Client,
  GetObjectCommand,
  paginateListObjectsV2,
} from "@aws-sdk/client-s3"

// Load environment variables
dotenv.config()

// Space configuration
const SPACE_NAME = "coffee-app"
const SPACE_REGION = "sfo2"
const SPACE_ENDPOINT = `https://${SPACE_REGION}.digitaloceanspaces.com`
const FOLDER_PREFIX = "photography.chrisfrew.in/"

// Image processing configuration
const MAX_WIDTH = 1750

// Directory paths
const ORIGINAL_IMAGES_DIR = path.join(process.cwd(), "original-images")
const PROCESSED_IMAGES_DIR = path.join(process.cwd(), "../src/images")

const ensureDirectoryExists = (directory: string): void => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
    console.log(`Created directory: ${directory}`)
  }
}

const getSpaceClient = (): S3Client => {
  return new S3Client({
    endpoint: SPACE_ENDPOINT,
    region: SPACE_REGION,
    credentials: {
      accessKeyId: process.env.DO_SPACES_KEY || '',
      secretAccessKey: process.env.DO_SPACES_SECRET || ''
    }
  })
}

const downloadImages = async (): Promise<void> => {
  try {
    const client = getSpaceClient()
    let totalFiles = 0
    let skippedFiles = 0
    let downloadedFiles = 0
    let failedFiles = 0
    
    const paginator = paginateListObjectsV2(
      { client },
      {
        Bucket: SPACE_NAME,
        Prefix: FOLDER_PREFIX
      }
    )

    console.log('\nStarting download process...')

    for await (const page of paginator) {
      const objects = page.Contents
      if (!objects) continue

      for (const obj of objects) {
        if (!obj.Key || obj.Key.endsWith('/')) continue

        const filename = path.basename(obj.Key)
        totalFiles++
        
        if (!/\.(jpg|jpeg|png|tif|tiff)$/i.test(filename)) {
          console.log(`Skipping non-image file: ${filename}`)
          continue
        }

        const localPath = path.join(ORIGINAL_IMAGES_DIR, filename)
        
        if (fs.existsSync(localPath)) {
          const stats = fs.statSync(localPath)
          if (stats.size > 0) {
            console.log(`File already exists and has content: ${filename}`)
            skippedFiles++
            continue
          } else {
            console.log(`File exists but is empty, re-downloading: ${filename}`)
            fs.unlinkSync(localPath)
          }
        }
        
        console.log(`Downloading: ${filename}`)
        
        try {
          const { Body } = await client.send(
            new GetObjectCommand({
              Bucket: SPACE_NAME,
              Key: obj.Key
            })
          )

          if (Body) {
            const chunks: Uint8Array[] = []
            for await (const chunk of Body as any) {
              chunks.push(chunk)
            }
            const buffer = Buffer.concat(chunks)
            
            fs.writeFileSync(localPath, buffer)
            console.log(`Successfully downloaded: ${filename}`)
            downloadedFiles++
          }
        } catch (err) {
          console.error(`Failed to download ${filename}:`, err)
          failedFiles++
        }
      }
    }

    console.log('\nDownload Summary:')
    console.log(`Total files processed: ${totalFiles}`)
    console.log(`Files skipped (already exist): ${skippedFiles}`)
    console.log(`Files successfully downloaded: ${downloadedFiles}`)
    console.log(`Files failed to download: ${failedFiles}`)

  } catch (err) {
    console.error("Error downloading images:", err)
    throw err
  }
}

const processImages = async (): Promise<void> => {
  const files = await fs.promises.readdir(ORIGINAL_IMAGES_DIR)
  let processedFiles = 0
  let skippedFiles = 0
  let failedFiles = 0
  
  console.log('\nStarting image processing...')

  for (const file of files) {
    if (file === ".DS_Store") {
      skippedFiles++
      continue
    }
    
    const base = path.parse(file).name
    const sourceFilePath = path.join(ORIGINAL_IMAGES_DIR, file)
    const targetImagePath = path.join(PROCESSED_IMAGES_DIR, `${base}.jpg`)

    try {
      const image = sharp(sourceFilePath)
      const metadata = await image.metadata()
      
      if (!metadata.width || !metadata.height) {
        console.log(`Warning: Skipping ${sourceFilePath} because it has no dimensions`)
        skippedFiles++
        continue
      }

      const aspectRatio = metadata.width / metadata.height

      if (aspectRatio === 0) {
        console.log(`Warning: Skipping ${sourceFilePath} because it has no aspect ratio`)
        skippedFiles++
        continue
      }

      const height = Math.floor(MAX_WIDTH / aspectRatio)
      
      await image
        .resize(MAX_WIDTH, height)
        .toFormat('jpeg')
        .toFile(targetImagePath)
      
      console.log(`Successfully processed: ${file}`)
      processedFiles++
    } catch (err) {
      console.error(`Error processing ${file}:`, err)
      failedFiles++
    }
  }

  console.log('\nProcessing Summary:')
  console.log(`Total files processed: ${processedFiles}`)
  console.log(`Files skipped: ${skippedFiles}`)
  console.log(`Files failed: ${failedFiles}`)
}

const main = async (): Promise<void> => {
  try {
    if (!process.env.DO_SPACES_KEY || !process.env.DO_SPACES_SECRET) {
      throw new Error("DO_SPACES_KEY and DO_SPACES_SECRET environment variables must be set")
    }

    ensureDirectoryExists(ORIGINAL_IMAGES_DIR)
    ensureDirectoryExists(PROCESSED_IMAGES_DIR)
    
    console.log("Starting download process from Digital Ocean...")
    await downloadImages()
    
    console.log("\nStarting image processing...")
    await processImages()
    
    console.log("\nAll operations completed successfully!")
  } catch (error) {
    console.error("Fatal error:", error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}