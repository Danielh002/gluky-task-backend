var User = require('../../models/user'); 

var findUser = function (req, res) {
    if( req.body.email ){
        User.findOne({ 'email': 'req.body.email'})
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'User found',
                    result: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error finding user',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error creating user',
            error: 'Description is required'
        })
    }
}

module.exports = findUser;