const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;
// describe('getPaymentTokenFromAPI', () => {
//   describe('#getPaymentTokenFromAPI()', () => {
//     it('waiting for the answer of an API or a Promise', (done) => {
//       const success = new GetPaymentTokenFromAPI(true);
//       success.getPaymentTokenAPI((err) => {
//         if (err) done(err);
//         else done();
//       });
//     });
//   });
// });
describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with a valid token when success is true', (done) => {
    // Test logic
    // Call the getPaymentTokenFromAPI() with sucess as true
    getPaymentTokenFromAPI(true)
      .then((token) => {
        expect(token).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
