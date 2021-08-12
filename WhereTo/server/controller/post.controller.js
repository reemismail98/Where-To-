const { Post } = require('../model/post.model');
const { User } = require('../model/user.model');
const { Category } = require('../model/category.model');




module.exports.createNewPost = async (req, res) => {
    const { title,description,picture,user, category } = req.body
    console.log()
    try{
        let post = await Post.create({
            title,
            description,
            picture,
            user,
            category
           
         })
         let userFound = await User.findOneAndUpdate({_id: user},{$push:{posts:post}}, {new:true})
         if(!userFound){
            console.log("i am in not userr ")
            return res.status(400).json({mesg:"Coudn't find user"})
           
         }
         let categoryFound=await Category.findOneAndUpdate({_id:category},{$push:{postsCat:post}},{new:true})
         if(!categoryFound){
             console.log("i am in not category ")
             return res.status(400).json({mesg:"Coudn't find category"})
            // throw new Error({mesg:"Coudn't find category"})
        }
         return res.json(post)
    }
    catch (err){
        console.log(err)
        return res.status(400).json(err)

    }
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