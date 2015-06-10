/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var Navigate = require('../flow/navigate');
var util = require('../util');

//instance variables
var nemo, navigate, bank, card;

describe('@login@', function () {
  before(function (done) {
    nemo = Nemo(function (err) {
      done = util.checkError(err, done);
      navigate = new Navigate(nemo);
      done();
    });
  });
  after(function (done) {
    util.cleanup(nemo, done);
  });
  it('should execute @failure@ scenario', function (done) {
    navigate.loginFailure('fail@fail.com', '11111111')
      .then(util.doneSuccess(done), util.doneError(done));
  });
  it('should execute @success@ scenario', function (done) {
    navigate.loginSuccess('fail@fail.com', '11111111')
      .then(util.doneSuccess(done), util.doneError(done));
  });
});