const mongoose = require("mongoose");
const stocksData = require("../models/stocksData");
const multer = require("multer");
const fs = require("fs");

exports.GET_ALL_STOCKS_DATA = (req, res) => {
  stocksData
    .find()
    .then((stocks) =>
      res.status(200).json({
        count: stocks.length,
        stocks: stocks,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

exports.GET_SINGLE_STOCKS_DATA = (req, res) => {
  const { index } = req.body;

  stocksData
    .find({ index: index })
    .then((stocks) =>
      res.status(200).json({
        count: stocks.length,
        stocks: stocks,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

exports.GET_ALL_COUNTRIES_DATA = (req, res) => {
  stocksData
    .aggregate([
      {
        $group: {
          _id: "$country",
          count: { $sum: 1 },
          avgRating: { $avg: "$Rating1" },
        },
      },
    ])
    .then((stocks) =>
      res.status(200).json({
        countries: stocks,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

exports.GET_STOCKS_COUNTRY_DATA = (req, res) => {
  const { country } = req.body;
  stocksData
    .find({ country: country })
    .then((stocks) =>
      res.status(200).json({
        count: stocks.length,
        stocks: stocks,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

exports.GET_STOCKS_COUNTRY_INDUSTRY_DATA = (req, res) => {
  const { country, industry } = req.body;
  stocksData
    .find({ country: country, industry: industry })
    .then((stocks) =>
      res.status(200).json({
        count: stocks.length,
        stocks: stocks,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

exports.GET_ALL_INDUSTRIES_DATA = (req, res) => {
  const { country } = req.body;
  console.log("Country= " + country);
  stocksData
    .aggregate([
      { $match: { country: country } },
      {
        $group: {
          _id: "$industry",
          count: { $sum: 1 },
          avgRating: { $avg: "$Rating1" },
        },
      },
    ])
    .then((stocks) =>
      res.status(200).json({
        industries: stocks,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

exports.addMovie = (req, res) => {
  upload(req, res, (err) => {
    if (err) res.status(500).json(err);
    else {
      fs.readFile(req.file.path, function (err, data) {
        if (err) throw err;
        else {
          const contentType = req.file.mimetype;
          const newMovie = new Movie({
            _id: mongoose.Types.ObjectId(),
            title: req.body.title,
            numberInStock: req.body.numberInStock,
            genre: req.body.genre,
            image: { data, contentType },
            rate: 0,
          });

          //Saving new movie in db
          newMovie.save((err, movie) => {
            if (err) res.status(500).json({ error: err });
            else {
              res.status(201).json({
                message: "A new movie added.",
                movie: movie,
              });
            }
          });
        }
      });
    }
  });
};
