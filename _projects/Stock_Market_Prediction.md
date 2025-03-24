---
layout: page
title: Stock Market Prediction
description: Project Final submission
img: assets/img/ibit.png
importance: 1
category: fun
---

Minute-to-minute predictions is near impossible to achieve. In this project, my goal was to implement an LSTM model to achieve such predictions. I also aimed to implement gradient boosting and compare the short-term results with an LSTM using the Alpaca API.

---

## Objective

The project aims to achieve the following outcomes:

- Effective use of **LSTM** and **Gradient Boosting** networks.
- Insights into how deep learning models capture temporal dependencies in time series data.
- Compare accuracies of the above models

---

## Challenges and Limitations

Stock price prediction is inherently challenging due to:

- **Market Volatility**: Unpredictable price fluctuations driven by external events.
- **Data Noise**: Irregularities and inconsistencies in financial data.
- **External Factors**: Global events, policy changes, and other variables impacting market behavior.

This project acknowledges these challenges and aims to highlight how RNNs and LSTMs address temporal dependencies in financial data. Additionally, this project aims to determine the extent at which a temporal LSTM or Gradient Booster is better for short-term market predictions.

---

## Setup

---

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies

Install the required Python libraries using:

```bash
pip install -r requirements.txt
```

---

## Run the LSTM model:

Execute the pipeline by running the `alpaca_engine_OMH.py` script:

```bash
python deployment/alpaca_engine_OMH.py.py
```

---

<div class="caption">
    The following pictures are the trends taken using an LSTM model.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nvda.png" title="NVDA, LSTM, 10 years" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ibit.png" title="IBIT, LSTM, 10 years" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Run the Gradient Booster models:

Execute the pipeline by running the `alapaca_engine_GB.py` script:

```bash
python deployment/alapaca_engine_GB.py.py
```

---

<div class="caption">
    The following pictures are the trends taken using gradient boosting. (Currently Not Available)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nvda.png" title="NVDA, LSTM, 10 years" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ibit.png" title="IBIT, LSTM, 10 years" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Results:

Project is still in development.