// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const sampleProducts = [
  {
    name: "Smartphone X",
    description: "A premium smartphone with high-end features.",
    price: 799,
    rating: 4.5,
    image: "https://example.com/images/smartphone-x.jpg",
    category: "phones"
  },
  {
    name: "Budget Smartphone Y",
    description: "An affordable smartphone with all essential features.",
    price: 299,
    rating: 4.0,
    image: "https://example.com/images/smartphone-y.jpg",
    category: "phones"
  },
  {
    name: "Laptop Pro 15",
    description: "A powerful laptop for professionals.",
    price: 1299,
    rating: 4.8,
    image: "https://example.com/images/laptop-pro-15.jpg",
    category: "laptops"
  },
  {
    name: "Laptop Air 13",
    description: "A lightweight laptop for everyday use.",
    price: 999,
    rating: 4.3,
    image: "https://example.com/images/laptop-air-13.jpg",
    category: "laptops"
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB Atlas");

    // Check if products already exist
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(sampleProducts);
      console.log("Sample products added successfully");
    } else {
      console.log("Products already exist. No sample data inserted.");
    }
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
