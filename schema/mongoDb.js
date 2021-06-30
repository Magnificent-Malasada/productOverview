const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productOverview');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoose')
});

let productSchema = mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features : [
    {feature: String, value: String}
  ],
  related_products: [
    {related_id: Number}
  ],
  styles : []
});

let styles = mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: Number,
  sale_price: Number,
  default: Boolean,
  photos : [
    {thumbnail_url: String, url: String}
  ],
  skus : [
    {sku_id: Number, quantity: String, size: String}
  ],
});

let ProductsList = mongoose.model('productsList', productSchema);
let Product = mongoose.model('product', product);
let ProductStyles = mongoose.model('styles', styles);