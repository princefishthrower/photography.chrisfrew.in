import os
from PIL import Image

MAX_WIDTH = 2000;

files = os.listdir(os.getcwd() + "/../original-images")
for file in files:
    # skip annoying mac files
    if file == ".DS_Store":
        continue
    image = Image.open(os.getcwd() + "/../original-images/" + file)
    imageWidth, imageHeight = image.size
    aspectRatio = imageWidth / imageHeight
    height = int(MAX_WIDTH / aspectRatio)
    image = image.resize((MAX_WIDTH, height))
    image.save(os.getcwd() + '/../src/images/' + file)
