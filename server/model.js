const db = require('../database/db.js');

module.exports = {
  getAllProducts: function(callback, count) {
    var queryString = `SELECT * FROM products LIMIT ${count}`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },

  getProduct: function(callback, id) {
    var queryString = `SELECT JSON_OBJECT('id', products.id, 'name', products.product_name, 'slogan', products.slogan, 'description', products.description, 'category', products.category, 'default_price', products.defaultPrice) FROM products WHERE products.id = ${id};
    `
    // var queryString = `SELECT * FROM features INNER JOIN products ON products.id = features.product_id WHERE product_id = ${id}`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },

  getStyles: function(callback, id) {
    var queryString = `SELECT * FROM styles INNER JOIN photos ON styles.id = photos.style_id WHERE product_id = ${id};`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },


}