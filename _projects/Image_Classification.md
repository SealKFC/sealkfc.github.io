---
layout: page
title: Image Classification Part 2
description: Created a custom CNN model to explore deep learning a bit further
img: assets/img/food101.png
importance: 4
category: work
---

---
- Note: This was my second independent project in which I wanted to create my own CNN model to classify images rather than fine-tuning an existing model to do it for me. This was also done before ChatGPT started to make an impact in programming and is highly reflective of my own abilities as an independent learner and explorer.

Link to Github Repository [[Link](https://github.com/aaronrhim/custom-CNN)]

---

## Goal

Following my project where I fine-tuned the ResNet50 CNN model to predict images in the Food101 dataset, I wanted to learn a bit more about model architecture so I decided to build my own CNN model, ground-up. Here, I built a CNN model using the sequential package from Keras--a package that allows you to build deep learning models at the architectural level without having to actually do any math. This project was originally created in Google Colab without any use of AI and was only converted into a python repository, through the use of an agentic AI assistant, for presentation purposes.

Again, the techniques I used in this repository were the most interesting methods that I wanted to use for my project but is just a small subset of the numerous deep learning techniques that I learned about.

---

# custom-CNN

Converted from a Jupyter notebook into a full Python project.

This package trains and evaluates a simple CNN on CIFAR-10 using Keras (TensorFlow). It mirrors the original Sequential model and training flow from the notebook.

## Project Structure

- `src/custom_cnn/` — Package modules
  - `data.py` — Load and preprocess CIFAR-10 (normalize, shuffle, val split)
  - `model.py` — Build the Sequential CNN
  - `training.py` — Compile and fit with callbacks (EarlyStopping, ReduceLROnPlateau)
  - `evaluation.py` — Evaluate and produce a classification report
  - `cli.py` — Simple CLI for training and evaluation
- `SequentialModel.ipynb` — Original notebook (kept for reference)
- `pyproject.toml` — Build configuration
- `requirements.txt` — Dependencies
- `.gitignore` — Common ignores plus `models/` output directory

## Setup

Create and activate a virtual environment (recommended), then install:

```
pip install -r requirements.txt
pip install -e .
```

This exposes the CLI `custom-cnn`.

## Usage

- Train and save a model:

```
custom-cnn train --epochs 50 --batch-size 64 --output-dir models
```

- Evaluate a saved model and print a classification report:

```
custom-cnn eval --model models/model.keras --report
```

You can also run the CLI via Python:

```
python -m custom_cnn.cli train --epochs 10
python -m custom_cnn.cli eval --model models/model.keras --report
```

## Notes

- The implementation uses TensorFlow/Keras as per the notebook. If you prefer PyTorch, we can port the architecture and training loop accordingly.
- CIFAR-10 is downloaded via `tensorflow.keras.datasets` on first run.
