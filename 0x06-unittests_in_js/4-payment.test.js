const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Wrapping existing function', () => {
  // create the spy / wrapper of an existing function
  const utilspy = sinon.spy(console, 'log');

  it('validate the usage of the utils', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilspy.calledWith('The total is: 10')).to.be.true;
    expect(stub.alwaysReturned(10)).to.be.true;
    stub.restore();
    utilspy.restore();
  });
});
