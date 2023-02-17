require("dotenv").config();
const { Order, Product } = require("../models");

class OrderController {
  static async createOrder(req, res, next) {
    try {
      const { name, price, quantity } = req.body;
      const UserId = req.user.id;
      const order = await Order.create({
        name,
        price,
        quantity,
        UserId,
      });
      res.status(201).json({ order });
    } catch (err) {
      next(err);
    }
  }

  static async getAllOrder(req, res, next) {
    try {
      const orders = await Order.findAll({ where: { UserId: req.user.id } });
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = OrderController;
