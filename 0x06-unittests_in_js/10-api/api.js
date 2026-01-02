const express = require('express');


const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (request, response) => {
  const id = request.params.id;

  response.send(`Payment methods for cart ${id}`);
});

app.get('/get_payments', (_request, response) => {
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (request, response) => {
  let userName = '';

  if (request.body) {
    userName = request.body.userName;
  }

  response.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
