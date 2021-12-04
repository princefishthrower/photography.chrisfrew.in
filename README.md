# photography.chrisfrew.in

Source code for the site photography.chrisfrew.in

## Processing Images

To process images so they are somewhat sanely sized, run the python script:

```bash
cd dev
python3 process-images.py
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