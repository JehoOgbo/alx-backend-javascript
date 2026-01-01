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
})
