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
    request.get(`${API_URL}/cart/-23`, (_, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
})
