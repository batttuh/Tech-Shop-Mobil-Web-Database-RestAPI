var express = require("express");
var app = express();
var fs = require("fs");
var body_parser=require("body-parser");
var userRouters=require("./routers/shop");
var accountRouters=require("./routers/account");
var path=require("path");
const admin=require("./routers/admin");
const connection=require("./utility/database");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const mongoDbStore=require("connect-mongodb-session")(session);




app.set("view engine","pug");
app.set("views","./views");
const products = require("./routers/productDatabaseToJson");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", products);

app.use(body_parser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")));
app.use("/admin",admin.routes);
app.use(accountRouters);

app.use(userRouters);


/*
connection.execute("SELECT * FROM products")
    .then((result)=>{
        console.log(result[0]);
    }).catch((err)=>{
        console.log(err);
    })
*/


var server = app.listen(8000, function () {
    console.log("Server is created")

});