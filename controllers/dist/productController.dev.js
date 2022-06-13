"use strict";

var products = [{
  image: "2.jpg",
  price: 7000,
  name: "Iphone SE2020",
  description: "Good choice"
}, {
  image: "3.jpg",
  price: 8000,
  name: "Samsung J8",
  description: "Not bad"
}, {
  image: "4.jfif",
  price: 4500,
  name: "Xaomi MİA3",
  description: "Look at this"
}, {
  image: "5.jfif",
  price: 4500,
  name: "Samsung I7",
  description: "Buy this now"
}];

module.exports.getAddProduct = function (req, res, next) {
  res.render("add-product", {
    title: "Add a New Product",
    path: "/admin/add-product"
  });
};

module.exports.getProduct = function (req, res, next) {
  console.log("Page is opened");
  res.render("index", {
    title: "Home Page",
    products: products,
    path: "/"
  });
};

module.exports.addProduct = function (req, res, next) {
  console.log(req.body);
  products.push({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  });
  res.redirect("/");
};