const express = require('express');
const router = express.Router();

// Import the Order model (adjust the path as needed)
const { Order } = require('../models/MyModal');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Export the router
module.exports = router;
