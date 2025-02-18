const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user (Signup)
router.post('/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create a new user document
    user = new User({ name, email, password, phone });
    await user.save();

    // Generate JWT token for the new user
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).send('Server error');
  }
});

// Login existing user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Generate JWT token upon successful login
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
