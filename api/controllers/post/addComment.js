var mongoose = require('mongoose');
var Post = require('../../models/post');



var addComment = function (req, res) {
    if (req.params.postId, req.body.author && req.body.comment) {
        let postId = req.params.postId;
        let comment = {
            _id: new mongoose.Types.ObjectId(),
            author: req.body.author,
            comment: req.body.comment
        }
        console.log(postId);

        Post.findById(postId).exec().then(result => {
            let post = result;
            console.log(post)
            post.comments.push(comment)
            post.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Added comment',
                        result: result
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'Error saving in db',
                        error: error
                    })
                })
        }).catch(error => {
            res.status(500).json({
                message: 'No post found to add comment',
                error: 'Invalid data'
            })
        })

    }

    else {
        res.status(500).json({
            message: 'Error creating post',
            error: 'Invalid data'
        })
    }
}

module.exports = addComment;
