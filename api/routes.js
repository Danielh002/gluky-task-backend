'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    app.route('/user')
        .post(controller.addUser);
    app.route('/user/:userEmail')
        .get(controller.findUser);

    app.route('/post')
        .post(controller.addPost);
    app.route('/post/:postId')
        .patch(controller.updatePost);
    app.route('/post/:postId')
        .post(controller.addComment);
     app.route('/posts')
        .post(controller.getPostsByAnyAtt);
};