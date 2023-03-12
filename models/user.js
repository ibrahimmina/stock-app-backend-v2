const mongoose = require("mongoose");

const purchasedStocksSchema = mongoose.Schema({
  
  Ticker: { type: String }, 
  Buy_Price: { type: Number }, 
  Buy_Date: { type: Date }
  
});

const userConfigurationSchema = mongoose.Schema({

  Risk:{ type: Number }, 
  ROI:{ type: Number }, 
  Min_Order_Lifetime:{ type: Number }, 
  Annual_Bank_Rate:{ type: Number }
  
  });

const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: {type: String,required: true,},
  email: {
    type: String,
    required: true,
    match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  },
  password: { type: String, required: true },
  userConfiguration: [userConfigurationSchema],
  purchasedStocks: [purchasedStocksSchema],
});



module.exports = mongoose.model("User", userSchema, "users");

