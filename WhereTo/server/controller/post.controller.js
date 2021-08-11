const { Post } = require('../model/post.model');

module.exports.createNewPost = (req, res) => {
    const { title,description,picture } = req.body
    Post.create({
       title,
       description,
       picture,
      
    }).then(post =>{
        User.findOneAndUpdate({name: request.body.name},{$addToSet:{posts:post._id}}, {new:true}).populate('posts')
        .then(created => response.json(created))
        response.json(post)
}).catch(err => console.log(err))
// User.findOneAndUpdate({name: request.body.name},{$push:{posts: post}}, {new:true}).populate('posts')
// .then(created => response.json(created))
// response.json(post)
// }).catch(err => console.log(err))
    
        .then(post => {res.json({post})
        Category.findOneAndUpdate({name: request.body.name},{$addToSet:{postsCat:post._id}}, {new:true}).populate('postsCat')
        .then(created => response.json(created))
        response.json(post)
}).catch(err => console.log(err))    
    .catch(err => res.status(400).json(err))}



module.exports.findAllPosts = (request, response) => {
    Post.find({})
        .then(post => response.json(post))
        .catch(err => response.json(err))
}
 
module.exports.findOneSinglePost = (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(oneSinglePost => res.json({ post: oneSinglePost }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 

module.exports.updateExistingPost = (req, res) => {
    Post.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPost => res.json({ post: updatedPost }))
        .catch(err => res.status(400).json(err ));
}
 
module.exports.deleteAnExistingPost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}