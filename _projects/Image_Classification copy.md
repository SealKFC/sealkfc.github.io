---
layout: page
title: Image Classification
description: Fine-tuned an image model to make predictions on the Food101 dataset
img: assets/img/food101.png
importance: 3
category: work
---

---
- Note: This was my first independent project and it was originally created in Google Colab on a school-issued HP laptop with a core i3 processor. This was also done before ChatGPT started to make an impact in programming and is highly reflective of my own abilities as an independent learner and explorer.

Link to Github Repository [[Link](https://github.com/aaronrhim/image-classification)]

---

## Goal

My goal was to simply learn about Convolutional Neural Networks at the architectural level without delving too deep in the math behind it all. This was also my first independent project and at the time, I didn't know anything about Python, Machine Learning, or even full stack development. By fine-tuning the ResNet50 model, a popular image classification model, on the Food101 dataset, I was able to explore and apply numerous techniques in CNN architecture including forward passes, layer freezing, back-propagation, convolution, max-pooling, activation frames, gradient descent, and so many more deep learning techniques (deep learning is just a subset of machine learning for image processing). 

The techniques I used in this repository were the most interesting methods that I wanted to use for my project but is just a small subset of the numerous deep learning techniques that I learned about.

---

## Data Preprocessing

What is data transformation? It adds variation to every training run of images to randomly alter images so the model consistently gets "new" data it has never seen before increasing overall accuracy of the resulting model.

---

#### Training Dataset

- 75750 images
- Data does contain some incorrect labels to make training harder (courtesy of yours truly, the data set creators)
- Used for training, has random chance to flip training image horizontally (50% default)
- Amplifies and diminishes random color values in training image
- Vertical flipping is generally not advisable for this data set unless I'm going to be dealing with upside down pictures of food

---

#### Testing Dataset
- No transforms, all data was checked and 100% accurate
- 25250 images

---

## Deployment

---

#### Software Requirements

    Jupyter Labs, Jupyter Notebook

---

Simply run the code cells in the .ipynb file

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/data_sample.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cheese_plate.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Samples of the training dataset and a test prediction.
</div>

---

## Evaluation

I used multiple evaluation techniques which includes popular optimizers such as SGD and Adam however, the Top K parameter allowed me to tokenize certain sections in my data that had the highest accuracy.

---

#### Top K Accuracy

LLMs, or Large Language Models, are trained on huge corpuses of text. Consequently, they feature massive dictionaries. However, some words are significantly more likely to appear (e.g. the, you, jump) than others (e.g. omnivore, innovation, matrimony). These words are cataloged as tokens, the fundamental unit of LLMs. Tokenizing large words includes splitting them into smaller strings (e.g. omnivore → omni and vore).  Essentially, Top K is an integer that defines how many of the most likely tokens should be considered when determining the next token.

---

## Results

- I made an AI model that can differenciate 101 different types of food, this is interactable with in [this Notebook](https://colab.research.google.com/drive/1z2gY2DQzOqxu-ArJWNTiRGr3NHp8hbQu?usp=sharing)
- The model has a top1 accuracy of ~82.19% which upon investigating and comparing with other projects is fairly competitive using ~40-50 epochs
- The model has a top5 accuracy of ~96.02%
  - Top5 describes the top 5 predictions of the model on what it thinks an image is, that means based on this metric, the model gets ~97% of its predictions correct in the top 5 things it thinks an image is

Source of top1 comparisons:
- [Comparison 1: ~86%](https://github.com/Herick-Asmani/Food-101-classification-using-ResNet-50/blob/master/Food101challenge.ipynb)
- [Comparison 2: ~84%](https://jovian.com/rivsonmoraes/food101_complete_resnet50)

---

#### What could be done to learn more?
- investigating how accuracy changes with different sizes of models (eg. Resnet200, resnet152, etc.)
- learning how to design a model from scratch would be a longer term goal
- learning how LLMs train without a groundtruth is also something that is interesting; classification models/projects typically have a set of data to evaulate performance of a model, but LLMs are generative so there's not exactly a groundtruth to tell if it's spouting nonsense or forming coherent sentences
- Modifying training data manually to remove poisoned data to increase accuracy would also be an interesting project to look at

---

#### What were some constraints encountered with the project?
- restriction of vRAM from using google colab restricted the size of model I could use, as well as the resolution of pictures.
- Preferably I would use something other than a T4 gpu to train, but it's the most powerful thing I have available without spending extra money
- Restriction in training time allowed per sesion is something I had to work around by using multiple google accounts