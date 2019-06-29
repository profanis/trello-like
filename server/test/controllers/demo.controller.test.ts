import server from '../../src/server';

const chai = require('chai');
const should = chai.should();
chai.use(require('chai-http'));

describe('Demo', () => {
  /*
  * Test the /GET route
  */
  describe('/GET DEMO', () => {
    it('should have data from /demo endpoint of type array', (done:any) => {
      chai
        .request(server)
        .get('/demo')
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
  });
});
