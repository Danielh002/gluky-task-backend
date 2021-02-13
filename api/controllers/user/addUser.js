var User = require('../../models/user'); 
var mongoose = require('mongoose');
var Settings = require('../../settings'); 

var addUser = function (req, res) {
    if( req.body.name && req.body.email ){
        const user = new User({
            _id:  new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            role: Settings.ROLE_WRITER,
        })
    
        user.save()
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'Created user',
                    result: user
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error creating user',
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

module.exports = addUser;
