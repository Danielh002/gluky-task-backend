var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: { type: String, required: true },
        email: { type: String, required: true },
        status: { type: String, enum: ["WRITER", "EDITOR"] },
        posts : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Post'
            }
        ]
    },
    { collection: 'user' }
)
module.exports = mongoose.model('User', UserSchema);