# photography.chrisfrew.in

Source code for the site photography.chrisfrew.in

## Processing Images

To process images so they are somewhat sanely sized, run the python script:

```bash
cd dev
python3 process-images.py
```

This converts all files in a `original-images/` folder in the root ( in `.gitignore` to prevent GitHub max repository size issues) to `src/images/`. Currently it is setup to produce images with a max width of 2000px