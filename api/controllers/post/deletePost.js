var Post = require('../../models/post'); 

var updatePost = function (req, res) {
    const postId = req.params.postId
    if( postId){
        Post.deleteOne({ _id: postId}).exec()
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'deleting post',
                    result: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error deleting post',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error deleting post',
            error: 'Data invalid'
        })
    }
}

module.exports = updatePost;