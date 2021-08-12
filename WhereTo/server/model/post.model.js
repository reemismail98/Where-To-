const mongoose = require('mongoose');




const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        //unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    user: {type:mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: {type:mongoose.Schema.Types.ObjectId, ref: 'Category' },

});


module.exports.Post = mongoose.model('Post', PostSchema);

// export default post;