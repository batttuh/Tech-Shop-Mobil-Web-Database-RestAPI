"use strict";

var express = require("express");

var router = express.Router();

var path = require("path");

var admin = require("./admin");

var shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProduct);
router.get("/details", shopController.getProductDetails);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
router.use(function (req, res, next) {
  res.status(404).render("404", {
    title: "404 Page"
  });
});
module.exports = router;