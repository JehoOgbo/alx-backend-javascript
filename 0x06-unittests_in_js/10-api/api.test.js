const request = require('request');
const { expect } = require('chai');


describe('API Integration Test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(response.body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response', (done) => {
    request.get(`${API_URL}/cart/15`, (_, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 15');
      done();
    });
  });

  it('GET /cart/:id returns error if id is not number', (done) => {
    request.get(`${API_URL}/cart/fifteen`, (_, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 for negative number', (done) => {
    request.get(`${API_URL}/cart/-23`, (_request, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /get_payements returns the correct output', (done) => {
    request.get(`${API_URL}/get_payments`, (_request, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });

  it('POST /login returns correct message', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'JohnHolt'}}, (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome JohnHolt');
      done();
    });
  });
})
