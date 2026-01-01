const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let checker;

  beforeEach(() => {
    if (!checker) {
      checker = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    checker.restore();
  });


  it('sendPaymentRequestToApi logs the correct Message', () => {
    sendPaymentRequestToApi(100, 20);

    expect(checker.calledWith('The total is: 120'));
    expect(checker.callCount).to.be.equal(1);
  });

  it('sendPaymentRequestToApi logs 20', () => {
    sendPaymentRequestToApi(10, 10);

    expect(checker.calledWith('The total is 20'));
    expect(checker.callCount).to.be.equal(1);
  });

})
