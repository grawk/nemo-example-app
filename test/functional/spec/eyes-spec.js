'use strict';

var Nemo = require('nemo');
var nemo = {};
var dd = require('data-driven');
var countries = require('../data/countries');

describe('@responsive@ email page', function () {
    before(function (done) {
        nemo = Nemo(done);
    });
    after(function (done) {
        nemo.driver.quit().then(done);
    });
dd(countries, function () {
    it('should let me reply to an email for locale {locality}', function (country, done) {
        //login
        nemo.driver.get(country.url);
        nemo.waitForDom();
        nemo.view._find('#reply').click();
        nemo.view._find('#forward').click();
        nemo.view._find('#moveto').click();
        nemo.view._find('#verify').getText().
            then(function (verifyText) {
                nemo.assert.equal(verifyText, 'replyforwardmoveto');
            });
        nemo.eyes.open('Email View '+nemo.data.uniquekey, country.locality);
        nemo.eyes.checkWindow('emailview: ' + country.locality);
        nemo.eyes.close().then(function (testResults) {
            console.log(testResults.url);
            nemo.assert.ok(testResults.isPassed);
            return true;
        }).
            then(function () {
                done();
            }).thenCatch(function (err) {
                done(err);
            });
    });
});

});