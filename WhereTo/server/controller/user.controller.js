const { User } = require('../model/user.model');

console.log("im herere  ")
module.exports.createNewUser = (req, res) => {
    console.log("im herere")
    const { name,email,password} = req.body
    User.create({
        name,
        email,
        password,
    })
        .then(post => res.json({post}))
        .catch(err => res.status(400).json(err))
}


module.exports.findAllUsers = (request, response) => {
    User.find({})
        .then(post => response.json(post))
        .catch(err => response.json(err))
}
 
module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ post: oneSingleUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ post: updatedUser }))
        .catch(err => res.status(400).json(err ));
}
 
module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}