const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
// const { beforeEach } = require("node:test")
const Utils = require('./utils');
// const { after } = require("mocha");
// const { describe } = require("node:test")

// describe('Wrap existing code', () => {
//   const sandbox = sinon.createSandbox();

//   beforeEach(() => {
//     sandbox.spy(Utils, 'calculateNumber');
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it('sendPaymentRequestToApi should be equal to calculateNumber', () => {
//     sendPaymentRequestToApi(100, 20);
//     expect(Utils.calculateNumber.calledOnce).to.be.true;
//     expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
//   });
// });
describe('Wrapping existing function', () => {
  // create the spy / wrapper of an existing function
  const utilspy = sinon.spy(Utils, 'calculateNumber');

  it('validate the usage of the utils', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilspy.calledOnce).to.be.true;
    expect(utilspy.calledWith('SUM', 100, 20)).to.be.true;
    utilspy.restore();
  });
});
