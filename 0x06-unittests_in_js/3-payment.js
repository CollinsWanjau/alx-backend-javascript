const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  let a = totalAmount;
  let b = totalShipping;
  const utilsSum = Utils.calculateNumber('SUM', a, b);
  console.log(`The total is: ${utilsSum}`);
}

module.exports = sendPaymentRequestToApi;
