const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: {type: String,required: true,},
  email: {
    type: String,
    required: true,
    match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  },
  password: { type: String, required: true },
  favouriteStocks: [{ type: String }],
  purchasedStocks: [{ type: String }],
});

module.exports = mongoose.model("User", userSchema, "users");

