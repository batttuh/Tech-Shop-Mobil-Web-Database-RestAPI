const express=require("express");
const router=express.Router();
const path=require("path");
const controllerAdmin=require("../controllers/admin");


router.get("/add-product",controllerAdmin.getAddProduct);
router.get("/products",controllerAdmin.getProducts);
router.post("/add-product",controllerAdmin.postAddProduct);
router.get("/products/:productid",controllerAdmin.getEditProduct);
router.post("/products",controllerAdmin.postEditProduct);
router.post("/delete-product",controllerAdmin.postDeleteProduct);

module.exports.routes=router;