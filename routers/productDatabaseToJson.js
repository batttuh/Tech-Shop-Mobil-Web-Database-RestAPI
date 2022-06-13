const express = require('express');
const router = express.Router();
const Products = require('../models/productFromDatabaseToJson');

/* GET programming languages. */
router.get('/get', async function(req, res, next) {
  try {
    var product= await Products.getMultiple(req.query.page);
    product=product.data
    res.json(product);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/post', async function(req, res, next) {
    try {
        const product={
            name:req.query.name,
            price:req.query.price,
            imageUrl:req.query.imageUrl,
            description:req.query.description,

        };
      res.json(await Products.create(product));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      res.send("Error ");
      next(err);
    }
  });

module.exports = router;