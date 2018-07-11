'use strict';


module.exports = function IndexModel() {
    let model = {
        name: 'index',
        cctreatment: (Math.random() > 0.5) ? 'combined' : 'classic'
    };
    console.log(model);
    return model;
};
