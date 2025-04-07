---
layout: page
title: Stock Market Prediction
description: Project Final submission
img: assets/img/ibit.png
importance: 1
category: work
---

## Github Repository
[Stock Market Prediction](https://github.com/aaronrhim/Stock-Market-Prediction)

---

Accurate stock price prediction plays a pivotal role in financial markets, influencing investment decisions, risk management, and portfolio optimization. This project leverages recurrent neural networks (RNNs) and long short-term memory (LSTM) networks for stock price prediction, showcasing the application of deep learning techniques in financial forecasting. In addition to exposing a technical approach to such forecasting, this project also promotes digital literacy, transparency, and ethical data use in that users will be more aware of what is happening to the international stock market. I also aimed to implement gradient boosting and compare the short-term results with an LSTM using the Alpaca API.

---

## Objective

The project aims to achieve the following outcomes:

- Improved forecasting accuracy of stock prices.
- Effective use of RNN and LSTM networks.
- Insights into how deep learning models capture temporal dependencies in time series data.
- Display predictions in a browser interface
- Explore real-time market fluctuations and how the model performs on such volatility

### Frameworks Used

[Alpaca API](https://alpaca.markets/), [YFinance API](https://pypi.org/project/yfinance/), [Socket.IO](https://socket.io/), [Flask](https://flask.palletsprojects.com/en/stable/)

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
python deployment/alpaca_engine_OMH.py
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
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/gif/NVDA_Interface.gif" title="Front End prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Run the Gradient Booster models:

Execute the pipeline by running the `alapaca_engine_GB.py` script:

```bash
python deployment/alapaca_engine_GB.py
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

Throughout this project, I gained exposure to the more technical side of the stock market. I realized too late that my model design was not a good choice. Using an LSTM to predict stock prices, while a good idea, required me to create more modular code in that it must evolve as time passes. This would require different methods to save a model checkpoint and continue training it on new data so it can test on the unforseen.

1. Using sliding-window technique in a real-world scenario

Due to my model only being deployed in a prototype scenario, I never really got the chance to test it and train it during the actual market hours. What this means is that I missed multiple integrals functions that are required for this model to work in the first place:

- Code works in an infinite setting in that it will continuously grow without interruption
- Code only works in market hours
- Code works in the present

