var mongoose = require('mongoose');


const PostSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        title: { type: String, required: true },
        content: { type: String, required: true },
        imageUrl: { type: String },
        createdAt : { type : Date, default: Date.now },
        updatedAt : { type : Date },
        status: { type: String, enum: ["PENDING", "APPROVE"] },
        comments: { type: Array }
    },
    { collection: 'post' }
)

module.exports = mongoose.model('Post', PostSchema);