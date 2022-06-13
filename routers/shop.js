const express=require("express");
const router=express.Router();
const path=require("path");
const admin=require("./admin");
const shopController=require("../controllers/shop");
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productid", shopController.getProduct);
router.get("/categories/:categoryid",shopController.getProductsByCategoryId);

//router.get("/details", shopController.getProductDetails);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);

router.use((req,res,next)=>{

    res.status(404).render("shop/404",{title:"404 Page"});

})

module.exports=router;