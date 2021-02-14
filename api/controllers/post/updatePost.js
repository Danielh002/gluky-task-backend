var Post = require('../../models/post'); 

var updatePost = function (req, res) {
    const postId = req.params.postId
    if( req.body.length > 0 &&  userTaskId){
        const updateOps = {};
        for(let ops of req.body){
            updateOps[ops.propName] = ops.value;
        }
        Post.updateOne({ _id: postId}, { $set: updateOps}).exec()
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'Updated post',
                    result: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error updating post',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error updating post',
            error: 'Data invalid'
        })
    }
}

module.exports = updatePost;