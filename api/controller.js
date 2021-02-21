var properties = require('../package.json')
var addUserFunction = require('./controllers/user/addUser');
var findUserFunction = require('./controllers/user/findUser');

var addPostFunction = require('./controllers/post/addPost');
var deletePostFunction = require('./controllers/post/deletePost');

var updatePostFunction = require('./controllers/post/updatePost');
var getPostsByAnyAttFunction = require('./controllers/post/getPostsByAnyAtt');
var getPostsByStatusEmail = require('./controllers/post/getPostByStatusAndEmail');
var addCommentFunction = require('./controllers/post/addComment');



var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    addUser: ( req, res) => addUserFunction( req, res),
    findUser: ( req, res) => findUserFunction( req, res),
    addPost: ( req, res) => addPostFunction( req, res),
    deletePost: (req,res) => deletePostFunction( req, res),
    updatePost: ( req, res) => updatePostFunction( req, res),
    getPostsByAnyAtt: ( req, res ) => getPostsByAnyAttFunction( req, res),
    getPostsByStatusEmail: ( req, res ) => getPostsByStatusEmail( req, res),
    addComment: ( req, res) =>  addCommentFunction(req, res)
};

module.exports = controllers;