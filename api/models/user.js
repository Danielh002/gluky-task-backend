var mongoose = require('mongoose');
var Settings = require('../settings'); 



const UserSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: { type: String, enum: [ Settings.ROLE_WRITER, Settings.ROLE_WRITER] },
    },
    { collection: 'user' }
)
module.exports = mongoose.model('User', UserSchema);