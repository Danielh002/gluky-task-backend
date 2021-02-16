var checkAuthenticatedFunction = require('./utils')

var middlewares = {
    checkAuthenticated: (req, res, next) => checkAuthenticatedFunction(req, res, next),
};

module.exports = middlewares;