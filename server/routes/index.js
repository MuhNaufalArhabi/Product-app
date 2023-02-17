const route = require('express').Router();
const user = require('./user');
const order = require('./order');
const authentication = require('../middleware/authentication');

route.use('/user', user);

route.use(authentication);

route.use('/order', order);


module.exports = route;
