const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js')

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with input as true (modern)', async () => {
    const response = await getPaymentTokenFromAPI(true);

    expect(response).to.be.an('object');
    expect(response.data).to.equal('Successful response from the API');
  });

  it('should resolve with input as true (olden)', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.equal('Successful response from the API')
        done();
      });
  });
})
