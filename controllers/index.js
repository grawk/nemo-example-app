'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {



    app.get('/', function (req, res) {
        var model = new IndexModel();

        res.render('index', model);

    });

};
