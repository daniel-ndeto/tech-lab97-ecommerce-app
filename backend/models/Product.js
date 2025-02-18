// backend/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  image: { type: String },
  category: { type: String }
});

module.exports = mongoose.model('Product', ProductSchema);
