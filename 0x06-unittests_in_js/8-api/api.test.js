const expect = require('chai').expect;
const request = require('request');
// const app = require('./api.js')

// const expect = chai.expect
// describe('apiTesting', () => {
//     it('should have the correct status code', (done) => {
//         chai.request(app)
//             .get('/')
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 expect(res).to.include('Welcome to the payment system')
//                 expect(console.log).to.be.calledWith('API available on localhost port 7865')
//                 done()
//             })
//         })
//     })

describe('apitest', () => {
  describe('GET /', () => {
    it('should listen on port 7865 and log a message', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET'
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        //   expect(err).to.be.null;
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
