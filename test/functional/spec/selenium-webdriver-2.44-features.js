/*global nemo:true, describe:true, it:true */
var plugins = require("../config/nemo-plugins"),
  nemoFactory = require("nemo-mocha-factory"),
  homePage = require("../page/homePage"),
  curtest = null,
  setup = {
    'view': ['latent']
  };
describe('@seleniumFeatureSuite@featureGroup1@', function () {
  nemoFactory({"plugins": plugins, "setup": setup});
  before(function (done) {
    var self = this;
    process.nextTick(function() {
      nemo.driver.controlFlow().on('uncaughtException', function(e) {
        console.error('Unhandled error: ' + e);
        curtest.error(e);
        //console.log(self);
        //nemo.driver.quit();
      });
      nemo.driver.get(nemo.props.targetBaseUrl + '/latent').then(function() {
        done();
      });
    });
  });
  beforeEach(function(done) {
     curtest = this.test;
    done();
  });
  it('should use @webdriver@until@elementLocated@', function (done) {
    //nemo.driver.get(nemo.props.targetBaseUrl + '/latent');
   nemo.driver.wait(nemo.wd.until.elementLocated(nemo.view.latent.doesntexistBy()), 5000);//.then();
   // console.log(div);
    nemo.view.latent.dynamicInput().sendKeys('abc easy as 123');
    nemo.driver.sleep(10000).then(function () {
      done()
    }, function (err) {
      console.log('POOT');
      done(err);
    });
  });
});