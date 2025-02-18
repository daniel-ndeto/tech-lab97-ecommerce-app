const express = require('express');
const router = express.Router();

// MPESA Payment endpoint (simulated with SDK push)
router.post('/mpesa', async (req, res) => {
  const { amount, phone, orderId } = req.body;
  try {
    // Simulate the MPESA SDK push notification.
    const simulatedPushResponse = {
      success: true,
      message: `MPESA push initiated. Please insert your PIN on your phone to complete the transaction.`,
      data: { amount, phone, orderId }
    };
    res.json(simulatedPushResponse);
  } catch (error) {
    console.error('Error processing MPESA payment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// PayPal Payment endpoint (simulated)
router.post('/paypal', async (req, res) => {
  const { amount, orderId } = req.body;
  try {
    // Simulate a PayPal payment process.
    const simulatedPaypalResponse = {
      success: true,
      message: `PayPal payment initiated. Payment will be sent to danielndeto222@gmail.com. Please follow the instructions in your PayPal account.`,
      data: { amount, orderId }
    };
    res.json(simulatedPaypalResponse);
  } catch (error) {
    console.error('Error processing PayPal payment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
