const mongoose = require('mongoose');
require("./post.model")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts:[{type:mongoose.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });


module.exports.User = mongoose.model('User', UserSchema);

// export default user;