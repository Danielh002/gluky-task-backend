var Post = require('../../models/post');

var getUsersAndTask = function (req, res) {
    if (req.params.status && req.params.email) {
        Post.find({status: req.params.status})
            .populate({
                path: 'author',
                match: { email: req.params.email}
            })
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Getting posts',
                    result: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Getting post',
                    error: error
                })
            })
    }
    else {
        res.status(500).json({
            message: 'Invalidad params (email,status)',
            error: 'Invalid data'
        })
    }
}

module.exports = getUsersAndTask;
