import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_WIDTH = 1750;

const processImages = async () => {
  const originalImagesPath = path.join(__dirname, '../../original-images');
  const targetImagesPath = path.join(__dirname, '../../src/images');

  try {
    const files = await fs.promises.readdir(originalImagesPath);

    for (const file of files) {
      if (file === '.DS_Store') {
        continue;
      }

      const base = path.parse(file).name;
      const sourceFilePath = path.join(originalImagesPath, file);
      const targetImagePath = path.join(targetImagesPath, `${base}.jpg`);

      const image = sharp(sourceFilePath);
      const metadata = await image.metadata();
      
      const aspectRatio = metadata.width! / metadata.height!;

      if (aspectRatio === 0) {
        console.log(`\n\nWARNING! Skipping ${sourceFilePath} because it has no aspect ratio\n\n`);
        continue;
      }

      const height = Math.floor(MAX_WIDTH / aspectRatio);
      
      await image
        .resize(MAX_WIDTH, height)
        .toFile(targetImagePath);

      console.log(`Successfully converted ${sourceFilePath} to ${targetImagePath}`);
    }

    console.log('Done!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
};

processImages();
