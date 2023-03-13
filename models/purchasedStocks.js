const mongoose = require("mongoose");

const purchasedStocksSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  UserID: mongoose.Types.ObjectId,
  ticker: {type: String},
  Buy_Price: {type: Number},
  Buy_Date:{type: Date},
  TickerExit:{type: Number},
  UserExit:{type: Number},
  Exit_Comments:{type: String}
});



module.exports = mongoose.model("PurchasedStocks", purchasedStocksSchema, "purchasedStocks");
