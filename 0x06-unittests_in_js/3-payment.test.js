const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi should use the calculateNumber method of Utils module', () => {
    const checker = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(checker.calledWith('SUM', 100, 20)).to.be.true;
    expect(checker.callCount).to.be.equal(1);
    checker.restore();
  });
})
