"use strict";

var products = require("../models/product");

module.exports.getIndex = function (req, res, next) {
  console.log("Page is opened");
  res.render("shop/index", {
    title: "Shopping",
    products: products,
    path: "/"
  });
};

module.exports.getProduct = function (req, res, next) {
  console.log("Page is opened");
  res.render("shop/products", {
    title: "Products",
    products: products,
    path: "/products"
  });
};

module.exports.getProductDetails = function (req, res, next) {
  console.log("Page is opened");
  res.render("shop/details", {
    title: "Details",
    products: products,
    path: "/details"
  });
};

module.exports.getCart = function (req, res, next) {
  console.log("Page is opened");
  res.render("shop/cart", {
    title: "Cart",
    products: products,
    path: "/cart"
  });
};

module.exports.getOrders = function (req, res, next) {
  console.log("Page is opened");
  res.render("shop/orders", {
    title: "Orders",
    products: products,
    path: "/orders"
  });
};