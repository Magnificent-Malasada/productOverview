const models = require('./model.js');

module.exports = {
  getAllProducts: function(req, res) {
    var count = req.query.count;
    models.getAllProducts((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }, count)
  },

  getProduct: function(req, res) {
    // console.log('query ', req.query);
    // console.log('params', req.params.product_id);
    var id = req.params.product_id;
    models.getProduct((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // res.status(200).send(Object.keys(data[0])[0]);
        let key = Object.keys(data[0])[0];
        res.status(200).send(JSON.parse(data[0][key]));
      }
    }, id)
  },

  getStyles: function(req, res) {
    // console.log('query ', req.query);
    // console.log('params', req.params.product_id);
    var id = req.params.product_id;
    models.getStyles((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }, id)
  }
}