const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const express = require('express');
const router = express.Router();

// ------------ Mongoose Model ------------

// Sub-schema for delivery address
const DeliveryAddressSchema = new Schema({
  streetAddress: { type: String, required: true, trim: true },
  city:          { type: String, required: true, trim: true },
  state:         { type: String, required: true, trim: true },
  zipCode:       { type: String, required: true, trim: true }
}, { _id: false });

// Main order schema
const OrderSchema = new Schema({
  firstName:   { type: String, required: true, trim: true },
  lastName:    { type: String, required: true, trim: true },
  email:       {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\+?[0-9]{7,15}$/, 'Please use a valid phone number.']
  },
  deliveryAddress: { type: DeliveryAddressSchema, required: true },
  orderNotes:      { type: String, trim: true, default: '' }
}, { timestamps: true });

const Order = model('Order', OrderSchema);

// ------------ Input Validation ------------
function validateOrderInput(data) {
  const errors = {};
  if (!data.firstName) errors.firstName = 'First name is required';
  if (!data.lastName)  errors.lastName  = 'Last name is required';

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^\+?[0-9]{7,15}$/.test(data.phoneNumber)) {
    errors.phoneNumber = 'Please use a valid phone number.';
  }

  if (!data.deliveryAddress || typeof data.deliveryAddress !== 'object') {
    errors.deliveryAddress = 'Delivery address is required';
  } else {
    const addr = data.deliveryAddress;
    if (!addr.streetAddress) errors['deliveryAddress.streetAddress'] = 'Street address is required';
    if (!addr.city)          errors['deliveryAddress.city']          = 'City is required';
    if (!addr.state)         errors['deliveryAddress.state']         = 'State is required';
    if (!addr.zipCode)       errors['deliveryAddress.zipCode']       = 'Zip code is required';
  }

  return errors;
}

// ------------ Express Routes ------------

// Create a new order
router.post('/', async (req, res) => {
  const validationErrors = validateOrderInput(req.body);
  if (Object.keys(validationErrors).length) {
    console.warn('Validation failed:', validationErrors);
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  } catch (err) {
    console.error('Error creating order:', err);
    if (err.name === 'ValidationError') {
      const mongooseErrors = Object.values(err.errors).reduce((acc, { properties }) => {
        acc[properties.path] = properties.message;
        return acc;
      }, {});
      return res.status(400).json({ errors: mongooseErrors });
    }
    return res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    return res.status(500).json({ error: err.message });
  }
});

// Export the router as the module export, and attach the Order model to it
module.exports = router;
module.exports.Order = Order;
