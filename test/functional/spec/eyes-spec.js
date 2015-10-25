/*global nemo:true, describe:true, it:true */
var Nemo = require('nemo');
var nemo = {};
var assert = require('assert');
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
            nemo.view._waitVisible('#layout');
            nemo.eyes.open('Email View', country.locality);
            nemo.eyes.checkWindow('main');
            nemo.eyes.close().then(function (testResults) {
                console.log(testResults.url);
                assert.ok(testResults.isPassed);
                return true;
            }).then(function () {
                done();
            }).thenCatch(function (err) {
                done(err);
            });
        });
    });

});