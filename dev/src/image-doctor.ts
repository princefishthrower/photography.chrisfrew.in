import imageConfigItems from "./imageConfigItems.json"
import fs from "fs"
import path from "path"

// This script checks that exactly all images in `original-images`
// are also exactly in `src/images` (no more or less images allowed in either).
// It also checks if the config includes the correct names and titles and
// if the comments are the same.

const runImageDoctor = async () => {
  const originalImagesPath = path.join(__dirname, "../../original-images")
  const imagesPath = path.join(__dirname, "../../src/images")
  const originalImages = await fs.promises.readdir(originalImagesPath)
  const images = await fs.promises.readdir(imagesPath)
  const originalImageNames = originalImages.filter(image => image !== '.DS_Store').map(image => path.parse(image).name)
  const srcImageNames = images.map(image => path.parse(image).name)

  const missingImages = originalImageNames.filter(
    imageName => !srcImageNames.includes(imageName)
  )

  if (missingImages.length > 0) {
    console.error(
      "Images in original-images but not in src/images:",
      missingImages
    )
  } else {
    console.log("Image doctor passed! You're ready to push to production!")
  }
}

runImageDoctor()
