'use strict';

const controller = require('./controller');
const middleware = require('./middleware'); 

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    app.route('/user')
        .post(controller.addUser);
    app.route('/user/:userEmail')
        .get( middleware.checkAuthenticated, controller.findUser);
    app.route('/post')
        .post(middleware.checkAuthenticated, controller.addPost);
    app.route('/post/:postId')
        .patch(middleware.checkAuthenticated, controller.updatePost);
    app.route('/post/:postId')
        .post(controller.addComment);
    app.route('/posts')
        .post(controller.getPostsByAnyAtt);
};