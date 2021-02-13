var properties = require('../package.json')

//var addUserFunction = require('./controllers/user/addUserFunction');


var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    //addUser: (req, res) => addUserFunction(req, res),
};

module.exports = controllers;