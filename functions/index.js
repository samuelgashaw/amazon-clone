const functions = require('firebase-functions');
const express = require('express');

const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51GxQNmJkcyuQwfCBjezaX6rW10nGeaQI8yxvITy7kYfiOyEb8Q2owErZ9v0n3masH4Tci9UK09IG46LjCBwQsWGr00SNDDFZph'
);

// - API Key

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received BOOM!!! for this amount>>> ', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: 'usd',
  });
  // ok createUserWithEmailAndPassword
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);

// example endpoint

// http://localhost:5001/clone-a76ff/us-central1/api
