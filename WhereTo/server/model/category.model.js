const mongoose = require('mongoose');
require("./post.model")

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    postsCat:
    [{type:mongoose.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });



module.exports.Category = mongoose.model('Category', CategorySchema);

// export default category;
