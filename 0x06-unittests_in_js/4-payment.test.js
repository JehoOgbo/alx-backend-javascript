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

  it('stub sendPaymentRequestToApi to return a particular value', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const correctMessage = sinon.spy(console, 'log');

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(correctMessage.calledWith('The total is: 10'));
    stub.restore();
    correctMessage.restore()
  });
})
