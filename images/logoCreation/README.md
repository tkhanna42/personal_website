# The Logo

So while learning machine learning and ravaging through the countless number of applications people were coming up with, I came across the idea of "style transfer". From what I understand it basically arises from repurposing existing neural net image classifiers to instead generate images. The already trained classifier consists of layers that detect specific features of the images in the training set, and we're taking some of these components to instead reshape the pixels on an inputted image to generate a new image with the features that the neural net piece was originally trained on.


For a more comprehensive information on style transfer, in addition to [Tensorflow](https://www.tensorflow.org/tutorials/image_recognition), take a look at [this](https://arxiv.org/pdf/1508.06576v2.pdf) and [this](https://youtu.be/9ziVGkt8Gg4?t=19m25s).


What I basically did was run [this program](https://github.com/jimmyyhwu/style-transfer) on the ./style.jpg and ./content.jpg files, and got output_1000.jpg, and then played around with an image editor (Preview on my Macbook Air), and got ./logo.png

