var express = require("express");
var router = express.Router();
const UserModel = require("../models/user");

var products = [
  {
    name: "Fanta",
    category: "Food",
    price: 0.5,
    barcode: 5449000011527
  },
  {
    name: "Smarties",
    category: "Food",
    price: 0.3,
    barcode: 1312321122
  },
  {
    name: "Pop Tarts",
    category: "Food",
    price: 0.5,
    barcode: 115222552
  },
  {
    name: "Large Noodle Pot",
    category: "Food",
    price: 1.5,
    barcode: 654546346
  },
  {
    name: "Pepsi Max Can",
    category: "Drinks",
    price: 0.5,
    barcode: 75374747
  },
  {
    name: "Pepsi Max Cherry Can",
    category: "Drinks",
    price: 0.5,
    barcode: 25252525
  },
  {
    name: "Fanta Can",
    category: "Drinks",
    price: 0.5,
    barcode: 77477337
  },
  {
    name: "nodeMCU",
    category: "Sundries",
    price: 5,
    barcode: 8833383835
  }
];

router.get("/", function(req, res, next) {
  res.json(products);
});

module.exports = router;
