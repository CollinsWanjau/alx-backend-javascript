const calculateNumber = require('./1-calcul.js');

const assert = require('assert');

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
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return 6 when adding 1.0 and 4.7', () => {
    assert.equal(calculateNumber('SUM', 1.0, 4.7), 6);
  });
  it('should return 4 when adding 1.9 and 2.1', () => {
    assert.equal(calculateNumber('SUM', 1.9, 2.1), 4);
  });
  it('should return 1 when adding -0.1 and 0.7', () => {
    assert.equal(calculateNumber('SUM', -0.1, 0.7), 1);
  });
  it('should return 0 when adding -0.7 and -0.9', () => {
    assert.equal(calculateNumber('SUM', -0.7, -0.9), -2);
  });
  it('add 5 and 10', () => {
    assert.equal(calculateNumber('SUM', 5, 10), 15);
  });
  it('add 2 and 2.7', () => {
    assert.equal(calculateNumber('SUM', 2, 2.7), 5);
  });
  it('add 1.0 and 4.0', () => {
    assert.equal(calculateNumber('SUM', 1.0, 4.0), 5);
  });
  it('add 1.7 and 3.5', () => {
    assert.equal(calculateNumber('SUM', 1.7, 3.5), 6);
  });
});

describe('#calculateNumber() of type SUBTRACT', () => {
  it('should return -4 when subtracting 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should return -4 when subtracting 1.0 and 4.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.0, 4.7), -4);
  });
  it('should return -1 when subtracting -0.1 and 0.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.1, 0.7), -1);
  });
  it('should return 0 when subtracting 1.9 and 2.1', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.9, 2.1), 0);
  });
  it('should return 0 when subtracting -0.7 and -0.9', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.7, -0.9), 0);
  });
  it('subtract 1 and 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('subtract 1.4 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('subtract 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('subtract 1.5 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('subtract 0.1 and 0.3', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
  });
});

describe('#calculateNumber() of type DIVIDE', () => {
  it('should return 0 when dividing 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return 0.2 when dividing 1.4 and 4.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.7), 0.2);
  });
  it('should return -1 when dividing -1.0 and 0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -1.0, 0.7), -1);
  });
  it('should return "Error" when dividing 1.3 and 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.3, 0), 'Error');
  });
  it('should return -44 when dividing -88.5 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', -88.5, 2.4), -44);
  });
  it('divide 1 and 4', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
  });
  it('divide 1 and 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  it('divide 1.4 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('divide 1.6 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', 1.6, 2.4), 1);
  });
  it('divide 4.2 and 1.5', () => {
    assert.equal(calculateNumber('DIVIDE', 4.2, 1.5), 2);
  });
});
