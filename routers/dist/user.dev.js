"use strict";

var express = require("express");

var router = express.Router();

var path = require("path");

var admin = require("./admin");

var controller = require("../controllers/productController");

router.get("/", controller.getProduct);
router.use(function (req, res, next) {
  res.status(404).render("404", {
    title: "404 Page"
  });
});
module.exports = router;