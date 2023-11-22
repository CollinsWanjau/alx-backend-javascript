/* eslint-disable no-undef */
/* global describe, it */
const calculateNumber = require('./0-calcul.js');

const assert = require('assert');
// const describe = require('mocha').describe;
// const it = require('mocha').it;

// > const calculateNumber = require("./0-calcul.js");
// > calculateNumber(1, 3)
// 4
// > calculateNumber(1, 3.7)
// 5
// > calculateNumber(1.2, 3.7)
// 5
// > calculateNumber(1.5, 3.7)
// 6
// Create a test suite for the function
describe('calculateNumber', function () {
  it('round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.2, 0), 1);
    assert.equal(calculateNumber(1.5, 0), 2);
  });
  it('round the second argument', () => {
    assert.equal(calculateNumber(0, 3.7), 4);
    assert.equal(calculateNumber(0, 4.8), 5);
    assert.equal(calculateNumber(0, 5.8), 6);
  });
  // Create a test case for the rounded part
  it('should round the numbers before adding them', function () {
    // Check that the result is equal to the expected value
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
