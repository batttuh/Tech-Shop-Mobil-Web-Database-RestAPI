const connection=require("../utility/database");
module.exports=class Product{
    constructor(name,price,imageUrl,description,categoryid){
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;
        this.categoryid=categoryid;
    }
    saveProduct(){
      return connection.execute("INSERT INTO products (name,price,imageUrl,description,categoryid) VALUES (?,?,?,?,?)",[this.name,this.price,this.imageUrl,this.description,this.categoryid]);
    }
    static getAll(){
       return connection.execute("SELECT * FROM products");

    }
    static getById(id){
        return connection.execute("SELECT * FROM products WHERE products.id=?",[id]);

    }
    static update(product){
        return connection.execute("UPDATE products SET products.name=?, products.price=?,products.imageUrl=?,products.description=? WHERE products.id=?,products.categoryid=?",[product.name,product.price,product.imageUrl,product.description,product.id,product.categoryid]);
    }
    static delete(id){
        return connection.execute("DELETE FROM products WHERE id=?",[id]);
    }
    static getByCategoryId(categoryid){
        return connection.execute("SELECT * FROM products WHERE products.categoryid=?",[categoryid]);

    }

}