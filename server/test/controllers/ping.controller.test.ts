import server from '../../src/server';

const chai = require('chai');
const should = chai.should();
chai.use(require('chai-http'));

describe('Ping', () => {
  /*
  * Test the /GET route
  */
  describe('/GET PING', () => {
    it('it should PING', (done:any) => {
      chai
        .request(server)
        .get('/ping')
        .end((err: any, res: any) => {
          res.should.have.status(200);
          res.text.should.be.equal('pong');
          done();
        });
    });
  });
});
