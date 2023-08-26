const express = require('express');

const cors = require('cors');

const ProductService = require('./services/product.services');

const app = express();

const service = new ProductService();

const port = process.env.PORT || 8080;

app.use(cors());

app.get('/api/products', (req, res) => {
    const data = service.find();
    res.status(200).json(data);
});

app.get('/api/products/:id', (req, res) => {
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

app.listen(port);