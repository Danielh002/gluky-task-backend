var mongoose = require('mongoose');
var Settings = require('../settings'); 



const PostSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        tittle: { type: String, required: true },
        content: { type: String, required: true },
        imageUrl: { type: String },
        createdAt : { type : Date, default: Date.now },
        updatedAt : { type : Date },
        status: { type: String, enum: [ Settings.PENDING , Settings.APPROVED] },
        comments: [
            { 
                _id: mongoose.Schema.Types.ObjectId,
                author: { type: String, required: true },
                comment: { type: String, rquired: true },
                createdAt : { type : Date, default: Date.now },
            },
        ]
    },
    { collection: 'post' }
)

module.exports = mongoose.model('Post', PostSchema);