const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/checkAuth");
const { addPurchasedStocks, getAllPurchasedStocks, deletePurchasedStocks, addPurchasedStocksGet } = require("../controller/purchasedStocks");

//Handling all the incoming requests
//router.post("/addPurchasedStocks", addPurchasedStocks);
router.post("/addPurchasedStocks/:UserID&:ticker&:Buy_Price&:Buy_Date", addPurchasedStocksGet);

router.post("/getAllPurchasedStocks/:userID", getAllPurchasedStocks);
router.get("/deletePurchasedStocks/:PurchasedStocksID", deletePurchasedStocks);
module.exports = router;