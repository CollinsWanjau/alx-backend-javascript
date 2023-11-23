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

describe('GET /available_payments JSON string', () => {
    it('Responds with 200 and correct JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Betty', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });