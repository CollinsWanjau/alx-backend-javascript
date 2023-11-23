// const { describe } = require('node:test');
const calculateNumber = require('./2-calcul_chai.js');

const expect = require('chai').expect;

// > const calculateNumber = require("./1-calcul.js");
// > calculateNumber('SUM', 1.4, 4.5)
// 6
// > calculateNumber('SUBTRACT', 1.4, 4.5)
// -4
// > calculateNumber('DIVIDE', 1.4, 4.5)
// 0.2
// > calculateNumber('DIVIDE', 1.4, 0)
// 'Error'
describe('#calculateNumber() of type SUM', () => {
  it('should return 6 when adding 1.4 and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('should return 6 when adding 1.0 and 4.7', () => {
    expect(calculateNumber('SUM', 1.0, 4.7)).to.equal(6);
  });
  it('should return 4 when adding 1.9 and 2.1', () => {
    expect(calculateNumber('SUM', 1.9, 2.1)).to.equal(4);
  });
  it('should return 1 when adding -0.1 and 0.7', () => {
    expect(calculateNumber('SUM', -0.1, 0.7)).to.equal(1);
  });
  it('should return 0 when adding -0.7 and -0.9', () => {
    expect(calculateNumber('SUM', -0.7, -0.9)).to.equal(-2);
  });
});

describe('#calculateNumber() of type SUBTRACT', () => {
  it('should return -4 when subtracting 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should return -4 when subtracting 1.0 and 4.7', () => {
    expect(calculateNumber('SUBTRACT', 1.0, 4.7)).to.equal(-4);
  });
  it('should return -1 when subtracting -0.1 and 0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.1, 0.7)).to.equal(-1);
  });
  it('should return 0 when subtracting 1.9 and 2.1', () => {
    expect(calculateNumber('SUBTRACT', 1.9, 2.1)).to.equal(0);
  });
  it('should return 0 when subtracting -0.7 and -0.9', () => {
    expect(calculateNumber('SUBTRACT', -0.7, -0.9)).to.equal(0);
  });
});

describe('#calculateNumber() of type DIVIDE', () => {
  it('should return 0 when dividing 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return 0.2 when dividing 1.4 and 4.7', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.7)).to.equal(0.2);
  });
  it('should return -1 when dividing -1.0 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -1.0, 0.7)).to.equal(-1);
  });
  it('should return "Error" when dividing 1.3 and 0', () => {
    expect(calculateNumber('DIVIDE', 1.3, 0)).to.equal('Error');
  });
  it('should return -44 when dividing -88.5 and 2.4', () => {
    expect(calculateNumber('DIVIDE', -88.5, 2.4)).to.equal(-44);
  });
});
