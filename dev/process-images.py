import os
import pathlib
from PIL import Image

MAX_WIDTH = 1750;

files = os.listdir(os.getcwd() + "/original-images")
for file in files:
    # skip annoying mac files
    if file == ".DS_Store":
        continue
    # file names
    base = file.split(".")[0]
    sourceFilePath = os.getcwd() + "/original-images/" + file
    targetImagePath = os.getcwd() + '/src/images/' + base + ".jpg"

    image = Image.open(sourceFilePath)
    imageWidth, imageHeight = image.size
    aspectRatio = imageWidth / imageHeight
    height = int(MAX_WIDTH / aspectRatio)
    image = image.resize((MAX_WIDTH, height))
    image = image.convert('RGB')
    image.save(targetImagePath)
    print("Successfully converted " + sourceFilePath + " to " + targetImagePath)

print("Done!")