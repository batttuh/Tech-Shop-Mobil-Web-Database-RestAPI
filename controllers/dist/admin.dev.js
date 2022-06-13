"use strict";

var products = require("../models/product");

module.exports.getAddProduct = function (req, res, next) {
  res.render("admin/add-product", {
    title: "Add a New Product",
    path: "/admin/add-product"
  });
};

module.exports.getProducts = function (req, res, next) {
  console.log("Page is opened");
  res.render("admin/products", {
    title: "Admin Products",
    products: products,
    path: "/admin/products"
  });
};

module.exports.postAddProduct = function (req, res, next) {
  console.log(req.body);
  products.push({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  });
  res.redirect("/");
};

module.exports.getEditProduct = function (req, res, next) {
  console.log("Page is opened");
  res.render("admin/edit-product", {
    title: "Admin Products",
    products: products,
    path: "/admin/edit-product"
  });
};

module.exports.postEditProduct = function (req, res, next) {
  res.redirect("/");
};