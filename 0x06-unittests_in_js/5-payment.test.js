const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
describe('sendPaymentRequestToAPI', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.spy(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });
  it("should log 'The total is: 20' when called with 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('The total is: 20')).to.be.true;
  });
});
