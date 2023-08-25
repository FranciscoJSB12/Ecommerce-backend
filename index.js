const express = require('express');

const cors = require('cors');

const ProductService = require('./services/product.services');

const app = express();

const service = new ProductService();

const port = 8080;

app.use(cors());

app.get('/products', (req, res) => {
    const data = service.find();
    res.status(200).json(data);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const data = service.findOne(id);
    if (data) {
        res.status(200).json({
            message: 'Product found',
            product: data
        });
    } else {
        res.status(404).json({
            message: 'Product not found'
        });
    }
   
});

app.listen(8080, () => {
    console.log('Server running on port ' + port);
});