import {imageConfigItems} from './src/config/imageConfigItems';
// This script checks that exactly all images in `original-images` 
// are also exactly in `src/images` (no more or less images allowed in either). 
// It also checks if the config includes the correct names and titles and 
// if the comments are the same.

// TODO: finish
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const originalImagesPath = path.join(__dirname, '../original-images');
const imagesPath = path.join(__dirname, '../src/images');
const configPath = path.join(__dirname, '../src/config.js');
const originalImages = await readdir(originalImagesPath);
const images = await readdir(imagesPath);

if (originalImages.length !== images.length) {
    console.error('Number of images in original-images and src/images are not the same!');
    process.exit(1);
}

if (originalImages.length !== imageConfigItems.length) {
    console.error('Number of images in original-images and imageConfigItems are not the same!');
    process.exit(1);
}

if (images.length !== imageConfigItems.length) {
    console.error('Number of images in src/images and imageConfigItems are not the same!');
    process.exit(1);
}



// const configImages = config.match(/(?<=image: ').*?(?=')/g);
// const configTitles = config.match(/(?<=title: ').*?(?=')/g);
// const configComments = config.match(/(?<=comment: ').*?(?=')/g);
// const configNames = config.match(/(?<=name: ').*?(?=')/g);
// const configImageNames = config.match(/(?<=imageName: ').*?(?=')/g);
// const configImageTitles = config.match(/(?<=imageTitle: ').*?(?=')/g);
// const configImageComments = config.match(/(?<=imageComment: ').*?(?=')/g);

