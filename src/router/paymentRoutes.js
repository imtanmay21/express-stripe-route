const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
  'sk_test_51NZoYlSCPhEk3WEA0uNvG6ZXnx9w97znWHfQjWl3B425UsjKHMZI1AVAYnTvlYaembNzE8agHJPndRiWAxF0cdCW005j7tXPXe'
);

// router endpoints
router.post('/intents', async (req, res) => {
  try {
    // create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // Integer, usd -> pennies, eur -> cents
      currency: 'inr',
    });
    // Return the secret
    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;