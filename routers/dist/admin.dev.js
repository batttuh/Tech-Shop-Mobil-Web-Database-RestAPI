"use strict";

var express = require("express");

var router = express.Router();

var path = require("path");

var controllerAdmin = require("../controllers/admin");

router.get("/add-product", controllerAdmin.getAddProduct);
router.post("/add-product", controllerAdmin.postAddProduct);
router.get("/edit-product", controllerAdmin.getEditProduct);
router.post("/edit-product", controllerAdmin.postEditProduct);
router.get("/products", controllerAdmin.getProducts); //module.exports.routes=router;