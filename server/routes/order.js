const route = require('express').Router();
const OrderController = require('../controllers/orderController');

route.post('/', OrderController.createOrder);
route.get('/', OrderController.getAllOrder);

module.exports = route;
