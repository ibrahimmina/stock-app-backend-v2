const mongoose = require("mongoose");

const stocksDataSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  index: { type: String, required: true },
  country: { type: String, required: true },
  industry: { type: String, required: true },
  product: { type: String, required: true },
  Buy: { type: Number, required: true },
  Sell: { type: Number, required: true },
  Neutral: { type: Number, required: true },
  BUY_DECISION: { type: Number, required: true },
  EXIT_DECISION: { type: Number, required: true },
  Stop_Loss: { type: Number, required: true },
  Trend_Started: { type: Number, required: true },
  Rating1: { type: Number, required: true },
  Rating2: { type: Number, required: true },
  Close: { type: Number, required: true },
  Volume: { type: Number, required: true },
});

module.exports = mongoose.model("stocksData", stocksDataSchema, "stocks_data");
