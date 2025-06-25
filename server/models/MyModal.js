const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const DeliveryAddressSchema = new Schema({
  streetAddress: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zipCode: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });

// Main order schema
const OrderSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
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
    match: [/^\\+?[1-9]\d{1,14}$/, 'Please use a valid phone number.']
  },
  deliveryAddress: {
    type: DeliveryAddressSchema,
    required: true
  },
  orderNotes: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

// Export the Order model
module.exports = model('Order', OrderSchema);
