var Post = require('../../models/post');

var getUsersAndTask = function (req, res) {
    const findOps = {};
    for(let ops of req.body){
        findOps[ops.propName] = ops.value;
    }
    Post.find(findOps)
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

module.exports = getUsersAndTask;
