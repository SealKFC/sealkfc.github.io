---
layout: page
title: Get Swole
description: BC Hacks 6 Submission
img: assets/img/Get_Swole.png
importance: 2
category: fun
giscus_comments: false
---

---
## Github Repository
[Get Swole Link](https://github.com/aaronrhim/HackathonCS6)

Get Swole is a fullstack web application that boosts gym performance by analyzing your form in real-time. It leverages MediaPipe for pose landmark detection and a custom model to verify full exercise repetitions.

---

## Features

---

- **Real-Time Pose Estimation:** Uses MediaPipe for extracting pose landmarks.
- **Full Rep Detection:** Combines angle calculations with a separately trained model.
- **Integrated Fullstack:** Seamlessly connects the frontend, backend, and ML components.

---

## Installation

---

#### Prerequisites

- Node.js (v14+)
- Python (v3.8+)

#### MediaPipe Setup

Follow the official MediaPipe documentation for installation instructions.

#### Backend:
{% raw %}
```bash
git clone https://github.com/yourusername/getswole.git
cd ./server
python MediaPipe.py
```
{% endraw %}

#### Frontend:
{% raw %}
```bash
cd ../frontend
npm install
npm start
```
{% endraw %}

---

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <a href="https://youtu.be/qAPHT_JzxHk?si=c2jW5gJc-CEqSBqC"
     style="position: absolute; top: 0; left: 0; width:100%; height:100%;">
    <img
      src="https://img.youtube.com/vi/qAPHT_JzxHk/maxresdefault.jpg"
      alt="A Cruel Angel's Thesis"
      style="width:100%; height:100%; object-fit:cover;"
    />
  </a>
</div>
