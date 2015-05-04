'use strict';

var fs = require('fs');
var path = require('path');
module.exports.setup = function (reportPath, nemo, callback) {
  nemo.perfectomobile = {
    getReport: function(fname) {
      return nemo.driver.executeScript('mobile:report:download',{type:'html'}).then(function(val)
        {
          var buf = new Buffer(val, 'base64');
          var d = nemo.wd.promise.defer();
          var fileName = path.resolve(reportPath, fname);
          fs.writeFile(fileName, buf.toString(), {encoding: 'utf8'}, function (err) {
            if (err) {
              return d.reject(err);
            }
            d.fulfill(fileName);
          });
          return d.promise;
        }
      );
    }
  };
  callback(null);
};