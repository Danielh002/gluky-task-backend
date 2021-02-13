var mongoose = require('mongoose');
var Settings = require('../../settings'); 
var Post = require('../../models/post'); 



var addPost = function (req, res) {
    if(req.body.authorId && req.body.tittle && req.body.content){
        const post = new Post({
            _id:  new mongoose.Types.ObjectId(),
            tittle: req.body.tittle,
            content: req.body.content,
            state: Settings.PENDING,
            authorId: req.body.authorId,
            comments: []
        })

        post.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Created user post',
                    result: userTask
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error saving in db',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error creating user post',
            error: 'Invalid data'
        })
    }
}

module.exports = addPost;
