const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js')

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with input as true', async () => {
    const response = await getPaymentTokenFromAPI(true);

    expect(response).to.be.an('object');
    expect(response.data).to.equal('Successful response from the API');
  });
})
