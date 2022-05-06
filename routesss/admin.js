const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (request, response, next) => {
    response.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true 
    });
});

router.post('/add-product', (request, response, next) => { //we can place put,patch,post,delete in the place of "use" to do respective works
    products.push({ title: request.body.title });
    response.redirect('/');
});

exports.routes = router;
exports.products = products;