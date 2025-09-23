---
layout: page
title: Get Swole
description: Built an AI gym trainer fullstack application
img: assets/img/Get_Swole.png
importance: 2
category: fun
giscus_comments: false
---

---
## Github Repository
[Get Swole Link](https://github.com/aaronrhim/HackathonCS6)

### Idea

Are you worried that people are judging you during your workout for having poor form? Are you worried that your joints might break mid rep? Well if so, Get Swole is the right application for you! Built on the idea to integrate AI into your daily gym sessions, Get Swole is a fullstack web application that boosts your gym performance by letting you see if your form is correct or not. Through a live video feed that has a built-in body angle detector, the user can fix their posture and count how many full reps they've done which both lead to noticably visible gains!

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
