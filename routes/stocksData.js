const express = require("express");
const router = express.Router();
const stocksDataController = require("../controller/stocksData");

//Handling all the incoming requests
router.get("/stocks", stocksDataController.GET_ALL_STOCKS_DATA);
router.get("/countries", stocksDataController.GET_ALL_COUNTRIES_DATA);
router.post("/industries", stocksDataController.GET_ALL_INDUSTRIES_DATA);
router.post("/stock", stocksDataController.GET_SINGLE_STOCKS_DATA);
router.post("/stockcountry", stocksDataController.GET_STOCKS_COUNTRY_DATA);
router.post(
  "/stockcountryindustry",
  stocksDataController.GET_STOCKS_COUNTRY_INDUSTRY_DATA
);

module.exports = router;
