const { redirect } = require("express/lib/response");
const Products=require("../models/product");
const Category=require("../models/categories");

module.exports.getAddProduct=(req, res, next) => {
    Category.getAll().then((categories)=>{
        res.render("admin/add-product",{title:"Add a New Product", path:"/admin/add-product",categories:categories[0]});

    }).catch((err)=>{
        console.log(err);
    })
}

module.exports.getProducts=(req, res, next) => {
    console.log("Page is opened");
    Products.getAll().then((products)=>{
        res.render("admin/products",{title:"Admin Products",products:products[0],path:"/admin/products",action:req.query.action,productId:req.query.id});


    }).catch((err)=>{
        console.log(err);
    });    
}
module.exports.postAddProduct=(req,res,next)=>{
    const product=new Products();
    product.name=req.body.name;
    product.price=req.body.price;
    product.imageUrl=req.body.image;
    product.description=req.body.description;
    product.categoryid=req.body.categoryid;
    product.saveProduct().then(()=>{res.redirect("/")}).catch((err)=>{console.log(err)});
}
module.exports.getEditProduct=(req, res, next) => {
    
    Products.getById(req.params.productid)
    .then((product)=>{
        Category.getAll().then((categories)=>{
            res.render("admin/edit-product",{title:"Admin Products",product:product[0][0],path:"/admin/product",categories:categories[0]});

        }).catch((err)=>{
            console.log(err);
        })

    }).catch((err)=>{
        console.log(err);
    });
    
    
}
module.exports.postEditProduct=(req,res,next)=>{
    const categories=Category.getAll();
    const product=new Products();
    product.name=req.body.name;
    product.price=req.body.price;
    product.imageUrl=req.body.image;
    product.description=req.body.description;
    product.id=req.body.id;
    Products.update(product)
    .then(()=>{
        res.redirect("/admin/products?action=edit");
    }).catch((err)=>{
        console.log(err);
    });

}
module.exports.postDeleteProduct=(req,res,next)=>{
    Products.delete(req.body.id)
    .then(()=>{
        res.redirect("/admin/products?action=delete&id="+req.body.id);

    }).catch((err)=>{

    })
}
