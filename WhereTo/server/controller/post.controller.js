// const { Post } = require('../model/post.model');
// const { User } = require('../model/user.model');
// const { Category } = require('../model/category.model');


// const multer = require('multer')

// const storage = multer.diskStorage({
   
    
//     destination: (req, file, callback) => {
//         console.log(file);
//         callback(null, '../../client/public/pictures');
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname)
//         console.log("some")
//     }
// })

// const upload = multer({ storage: storage });
// exports.upload = upload;




// module.exports.createNewPost = async (req, res) => {
//     console.log("I am at the createNewPot method")
//     const picture = request.file.originalname;
//     const { title,description } = req.body
//     console.log()
//     try{
//         let post = await Post.create({
//             title,
//             description,
//             picture,

           
//          })
//          let userFound = await User.findOneAndUpdate({_id: user},{$push:{posts:post}}, {new:true})
//          if(!userFound){
//             console.log("i am in not userr ")
//             return res.status(400).json({mesg:"Coudn't find user"})
           
//          }
//          let categoryFound=await Category.findOneAndUpdate({_id:category},{$push:{postsCat:post}},{new:true})
//          if(!categoryFound){
//              console.log("i am in not category ")
//              return res.status(400).json({mesg:"Coudn't find category"})
//             // throw new Error({mesg:"Coudn't find category"})
//         }
//          return res.json(post)
//     }
//     catch (err){
//         console.log(err)
//         return res.status(400).json(err)

//     }
// }
    




// module.exports.findAllPosts = (request, response) => {
//     Post.find({})
//         .then(post => response.json(post))
//         .catch(err => response.json(err))
// }
 
// module.exports.findOneSinglePost = (req, res) => {
//     Post.findOne({ _id: req.params.id })
//         .then(oneSinglePost => res.json({ post: oneSinglePost }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }
 

// module.exports.updateExistingPost = (req, res) => {
//     Post.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedPost => res.json({ post: updatedPost }))
//         .catch(err => res.status(400).json(err ));
// }
 
// module.exports.deleteAnExistingPost = (req, res) => {
//     Post.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }


const { Post } = require('../model/post.model');
const { User } = require('../model/user.model');
const { Category } = require('../model/category.model');




module.exports.createNewPost = async (req, res) => {
    console.log(req.body)
    const { title,description,picture,user,category} = req.body
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
    Post.find().populate('user').populate('category')
        .then(post => response.json(post))
        .catch(err => response.json(err))
}
 
module.exports.findOneSinglePost = (req, res) => {
    Post.findOne({ _id: req.params.id }).populate('user').populate('category')
        .then(oneSinglePost => res.json(oneSinglePost ))
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
    console.log(req.params.id)
    Post.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}