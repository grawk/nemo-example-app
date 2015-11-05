'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/', function (req, res) {
        
        res.render('index', model);
        
    });
    app.get('/responsive/us', function (req, res) {

        res.render('responsive', model);

    });
    app.get('/responsive/de', function (req, res) {
        res.locals.context = {
            locality: {'country': 'US', 'language': 'de'}
        };
        //model.breakclass = 'breakit';
        res.render('responsive', model);

    });

};
