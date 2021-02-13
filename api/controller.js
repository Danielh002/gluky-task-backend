var properties = require('../package.json')
var addUserFunction = require('./controllers/user/addUser');
var findUserFunction = require('./controllers/user/findUser');

var addPostFunction = require('./controllers/post/addPost');


var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    addUser: (req, res) => addUserFunction(req, res),
    findUser: (req, res) => findUserFunction(req, res),

    addPost: (req, res) => addPostFunction(req, res)
};

module.exports = controllers;