# photography.chrisfrew.in

Source code for the website photography.chrisfrew.in

NOTE THAT DO TO ANNOYING NODE ENCODING, YOU NEED TO REMOVE ANY UMLAUTS FROM PHOTOS IN THE `original-images` FOLDER!

IF YOU DON'T YOU'LL SEE THEY WILL BE PICKED UP BY THE IMAGE DOCTOR!

# Recipe for adding new picture(s):

1. Drop the original full size images (ideally the highest quality image will be the original .TIF, but .jpg or .png will work) into the `original-images` folder
2. Add the new entries to `config/imageConfigItems.ts`, ensuring the file name is correct
3. Run `cd dev && npm run process-images` to generate the web-ready images
4. Push to master to publish the site!

## Generate Web Friendly Sized Images

This converts all files in a `original-images/` folder in the root ( in `.gitignore` to prevent GitHub max repository size issues) to `src/images/`. Currently it is setup to produce images with a max width of 2000px

```bash
cd dev && npm run process-images
```

This script generates smaller images from the large originals. Note that this expects folder `original-images` to exist in the project root and have images in it.

## Run Image Doctor

This is a typescript based tool (technically a separate npm project) that compares the raw images and web images, hinting at any it cannot find

```bash
cd dev && npm run image-doctor
```

This script checks that exactly all images in `original-images` are also exactly in `src/images` (no more or less images allowed in either). It also checks if the config includes the correct names and titles and if the comments are the same.