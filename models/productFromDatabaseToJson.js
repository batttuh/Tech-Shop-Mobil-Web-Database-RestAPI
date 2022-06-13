const db = require('../utility/db');
const helper = require('../utility/helper');
const config = require('../utility/config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id,name,price,imageUrl,description FROM products LIMIT ${offset},${config.listPerPage}`
  );
    
  const data = helper.emptyOrRows(rows);
  return {
    data,
  }
}
async function create(products){
  const result = await db.query(
    `INSERT INTO products (name, price, imageUrl, description) VALUES (?,?,?,?)`,
    [products.name,products.price,products.imageUrl,products.description]
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}