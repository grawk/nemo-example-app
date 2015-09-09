/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var assert = require('assert');
var util = require('../util');

describe('@eyes@', function () {
  before(function (done) {
    nemo = Nemo(done);
  });
  after(function (done) {
    nemo.driver.quit().then(done);
  });
  it('should compare stuff', function (done) {
    //login
    nemo.driver.get(nemo.data.baseUrl);
    util.waitForJSReady(nemo);
    nemo.view._waitVisible('#email');
    nemo.eyes.open('nemo-example-app', 'login page');
    nemo.eyes.checkWindow('nemo-example-app login page');
    nemo.eyes.close().then( function(testResults){
      assert.ok(testResults.isPassed);
      console.log(testResults.url);
      return true;
    }).then(function () {
      done();
    }, function (err) {
      done(err);
    })
  });
});