// const mongoose = require('mongoose');




// const PostSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         //unique: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     picture: {
//         type: String,
//         required: false
//     },
//     user: {type:mongoose.Schema.Types.ObjectId, ref: 'User' },
//     category: {type:mongoose.Schema.Types.ObjectId, ref: 'Category' },

// },{timestamps: true});


// module.exports.Post = mongoose.model('Post', PostSchema);

// // export default post;


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
    // user: {type:mongoose.Schema.Types.ObjectId, ref: 'User' },
    // category: {type:mongoose.Schema.Types.ObjectId, ref: 'Category' },

},{timestamps: true});


module.exports.Post = mongoose.model('Post', PostSchema);

// export default post;