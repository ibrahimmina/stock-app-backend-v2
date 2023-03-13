const PurchasedStocks = require("../models/purchasedStocks");
const mongoose = require("mongoose");

exports.addPurchasedStocks = (req, res) => {
  const purchasedStock = new PurchasedStocks({
    _id: mongoose.Types.ObjectId(),
    UserID:req.body.userID,
    ticker: req.body.ticker,
    Buy_Price: req.body.Buy_Price,
    Buy_Date:req.body.Buy_Date,
  })

  purchasedStock
  .save()
  .then(() =>
    res.status(201).json({ message: "Purchased Stock added successfuly to MongoDB" })
  )
  .catch((error) =>
    res.status(500).json({
      message: "Something went wrong when adding to MongoDB",
      error,
    })
  );
};

exports.getAllPurchasedStocks = (req, res) => {
    const userID = req.params.userID;
    PurchasedStocks.find({}).select({ "UserID": userID})
      .then((docs) => {
        return res.status(200).json(docs);
      })
      .catch((err) => res.status(500).json(err));
  };

exports.deletePurchasedStocks = (req, res, next) => {
    PurchasedStocks.remove({ _id: req.params.PurchasedStocksID })
    .then((result) => {
      if (result.length > 0)
        res.status(200).json({ message: "Purchased Stock has been deleted" });
      else res.status(404).json({ message: "No Purchased Stocks was found with this ID" });
    })
    .catch((error) => res.status(200).json(error));
};

