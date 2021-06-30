const connection = require('../database/db.js');
const express = require('express');
const controller = require('./controller.js');
const app = express();
const PORT = 3000 || process.env.PORT;


app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.get('/products', controller.getAllProducts);

app.get('/products/:product_id', controller.getProduct);

app.get('/products/:product_id/styles', controller.getStyles);

