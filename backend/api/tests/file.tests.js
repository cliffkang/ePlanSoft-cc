const mongoose = require('mongoose');
const chaiHTTP = require('chai-http');
const chai = require('chai');
require('dotenv').config();

const { expect } = chai;
const server = require('../../server');

chai.use(chaiHTTP);

describe('File', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/testPlan', { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('Mongo connected!');
      done();
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('[POST] /file', () => {
    it('should create file', (done) => {
      const newFile = {
        file: process.env.BASE64FILE,
      };
      chai
        .request(server)
        .post('/file')
        .send(newFile)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body['file saved'].file.type).to.equal('Buffer');
          done();
        });
    });

    it('should error if url property not given', (done) => {
      const newFile = {
        website: 'https://www.youtube.com',
      };
      chai
        .request(server)
        .post('/file')
        .send(newFile)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.error.text).to.equal('file not sent');
          done();
        });
    });
  });
});
