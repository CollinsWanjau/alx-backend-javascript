const expect = require('chai').expect;
const request = require('request');

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

  describe('GET /cart/12', () => {
    it('should listen to the correct status code', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET'
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/123', () => {
    it('should listen to the correct status code', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET'
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });
  });

  describe('GET /cart/a23', () => {
    it('should listen to the correct status code', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a23',
        method: 'GET'
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404); 
        done();
      });
    });
  });
  describe('GET /cart/23bc', () => {
    it('should listen to the correct status code', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/23bc',
        method: 'GET'
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(404); 
        done();
      });
    });
  });

});

