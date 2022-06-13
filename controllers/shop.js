const Products=require("../models/product");
const Category=require("../models/categories");


module.exports.getIndex=(req, res, next) => {
    console.log("Page is opened");
    
    Products.getAll().then((products)=>{
        
        Category.getAll().then((categories)=>{
            res.render("shop/index",{title:"Shopping",products:products[0],path:"/",categories:categories[0]});
        }).catch((err)=>{console.log(err)});

    }).catch((err)=>{
        console.log(err);
    });
    
    
}
module.exports.getProductsByCategoryId=(req, res, next) => {

    Products.getByCategoryId(req.params.categoryid).then((product)=>{
        Category.getAll().then((categories)=>{
            res.render("shop/products",{title:"Products",products:product[0],path:"/products",categories:categories[0],selectedId:req.params.categoryid});

        }).catch((err)=>{
            console.log(err);
        })

    }).catch((err)=>{
        console.log(err);
    })
    
}
module.exports.getProducts=(req, res, next) => {
    console.log("Page is opened");
    const categories=Category.getAll();

    Products.getAll().then((products)=>{
        Category.getAll().then((categories)=>{
            res.render("shop/products",{title:"Products",products:products[0],path:"/products",categories:categories[0]});

        }).catch((err)=>{
            console.log(err);
        })


    }).catch((err)=>{
        console.log(err);
    });    
}
module.exports.getProduct=(req, res, next) => {
    Products.getById(req.params.productid)
    .then((product)=>{
        res.render("shop/product-details",{title:product[0][0].name,product:product[0][0],path:"/products"})    

    }).catch((err)=>{
        console.log(err);
    })

}
module.exports.getProductDetails=(req, res, next) => {
    console.log("Page is opened");
    Products.getAll().then((products)=>{
        res.render("shop/details",{title:"Details",products:products,path:"/details"});

    }).catch((err)=>{
        console.log(err);
    });
    
}
module.exports.getCart=(req, res, next) => {
    console.log("Page is opened");
    Products.getAll().then((products)=>{
        res.render("shop/cart",{title:"Cart",products:products,path:"/cart"});

    }).catch((err)=>{
        console.log(err);
    });
    
}
module.exports.getOrders=(req, res, next) => {
    console.log("Page is opened");
    Products.getAll().then((products)=>{
        res.render("shop/orders",{title:"Orders",products:products,path:"/orders"});

    }).catch((err)=>{
        console.log(err);
    });
    
}

