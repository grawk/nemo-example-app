'use strict';

module.exports.setup = function (nemo, cb) {
    nemo.waitForDom = function waitForJSReady() {
        return nemo.driver.wait(function() {
                return nemo.driver.executeScript(function() {
                    return document.getElementsByTagName('body')[0].getAttribute('data-loaded');
                });
            }
            , 10000, 'JavaScript didn\'t load');
    };
    nemo.assert = require('assert');
    cb(null);
};