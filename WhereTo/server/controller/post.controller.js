const { Post } = require('../model/post.model');
const { User } = require('../model/user.model');
const { Category } = require('../model/category.model');
module.exports.createNewPost = (req, res) => {
    const { title,description,picture } = req.body
    Post.create({
       title,
       description,
       picture,
      
    }).then(post =>{
        User.findOneAndUpdate({name: req.body.name},{$addToSet:{posts:post}}, {new:true}).populate('posts')
        .then(async thisUser => {
            const thisCategory = await Category.findOneAndUpdate({name: req.body.name},{$addToSet:{postsCat:post}}, {new:true}).populate('postsCat')
            Post.findOneAndUpdate({_id: post._id},{$addToSet:{category:thisCategory, user:thisUser}}).then(post =>{

                res.json(thisUser)
            })
            
}).catch(err => res.status(400).json(err))

})
}



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