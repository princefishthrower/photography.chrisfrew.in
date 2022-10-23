# photography.chrisfrew.in

Source code for the website photography.chrisfrew.in

# Recipe when adding a new picture:

1. Drop the original full size images (ideally the highest quality image will be the original .TIF, but .jpg or .png will work) into the `original-images` folder
2. Add the new entry to `config/imageConfigItems.ts`
3. Run `python3 dev/process-images.py` to generate the web-ready images
4. Push to master to publish the site!

## Processing Images

To process images so they are somewhat sanely sized, run the python script:

```bash
python3 dev/process-images.py
```

This converts all files in a `original-images/` folder in the root ( in `.gitignore` to prevent GitHub max repository size issues) to `src/images/`. Currently it is setup to produce images with a max width of 2000px

## Generate Web Friendly Sized Images

```bash
npm run process-images
```

This script generates smaller images from the large originals. Note that this expects folder `original-images` to exist in the project root and have images in it.

## Run an Image Doctor

```bash
npm run image-doctor
```

This script checks that exactly all images in `original-images` are also exactly in `src/images` (no more or less images allowed in either). It also checks if the config includes the correct names and titles and if the comments are the same.