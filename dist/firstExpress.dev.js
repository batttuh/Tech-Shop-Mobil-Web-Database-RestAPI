"use strict";

var express = require("express");

var app = express();

var fs = require("fs");

var body_parser = require("body-parser");

var userRouters = require("./routers/shop");

var path = require("path");

var admin = require("./routers/admin");

app.set("view engine", "pug");
app.set("views", "./views");
app.use(body_parser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, "public"))); //app.use("/admin",admin.routes);

app.use(userRouters);
var server = app.listen(8000, function () {
  console.log("Server is created");
});