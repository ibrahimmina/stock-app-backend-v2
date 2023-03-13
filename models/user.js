const mongoose = require("mongoose");


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
  UserConfig: [userConfigurationSchema],
});



module.exports = mongoose.model("User", userSchema, "users");

