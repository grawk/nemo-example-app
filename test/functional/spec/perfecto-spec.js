/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var pl = require('../util').promiseLog;

describe('@perfecto@', function () {
  before(function (done) {
    nemo = Nemo(function (err) {
      if (err) {
        return done(err);
      }
      done(err);
    });
  });
  after(function (done) {
    nemo.driver.close();
    nemo.perfectomobile.getReport('foo-' + (Date.now()) + '.html').then(function (reportName) {
      console.log('saved', reportName);
    });
    nemo.driver.quit().then(done);
  });
  it('should open URL on mobile device', function (done) {

    //login
    nemo.driver.get(nemo.data.baseUrl);
    nemo.view.login.emailWaitVisible().then(function () {
      done();
    }, function (err) {
      done(err);
    })

  });
});