const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const customerController = require('../controllers/customerController');
const orderController = require('../controllers/orderController');

//Home
router.get('/', (req, res) => {
    res.send('Check README.md for API calls');
});

// 1. Api to fetch Customers list
router.get('/customers', customerController.customerList);

// 2. Api to fetch specific Customer Orders list
router.get('/customers/:id/orders', customerController.ordersList);

// 3. Api to fetch customer Details with maximum Orders in an year
router.get('/customers/max-orders', customerController.maxOrders);

// 4. Api to create new Customer
router.post('/customers/new', customerController.createCustomer);

// 5. Api to create new Product
router.post('/products/new', productController.createProduct);

// 6. API to update Product Price
router.post('/products/:id/price-update', productController.updatePrice);

module.exports = router;