var should  = require('should');
var assert  = require('assert');
var request = require('supertest');

describe('POST /sort', function(){
  var data = {
    array: [4,2,5,0,1,6,9,5,4,3,8,9],
    order: 'asc'
  };

  it("it should return error when no array and/or the order property is provided in the request", function(done) {
    request('http://localhost:3000')
    .post('/sort')
    .send({})
    .expect(400)
    .end(function(err, res){
      if(err){
        throw err
      }

      res.body.should.have.property('error_description');
      done();
    })
  });

  it('it should return the sorted array', function(done){
    request('http://localhost:3000')
    .post('/sort')
    .send(data)
    .expect(200)
    .end(function(err, res){
      if(err){
        throw err;
      }

      res.body.should.have.property('array');
      res.body.should.have.property('sortedOnDate');
      done();
    })
  });
})
