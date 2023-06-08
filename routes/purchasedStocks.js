const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/checkAuth");
const { addPurchasedStocks, getAllPurchasedStocks, deletePurchasedStocks } = require("../controller/purchasedStocks");

//Handling all the incoming requests
router.post("/addPurchasedStocks", addPurchasedStocks);
router.post("/getAllPurchasedStocks/:userID", getAllPurchasedStocks);
router.get("/deletePurchasedStocks/:PurchasedStocksID", deletePurchasedStocks);
module.exports = router;