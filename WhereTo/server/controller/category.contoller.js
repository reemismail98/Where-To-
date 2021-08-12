const { Category } = require('../model/category.model');

module.exports.createNewCategory = (req, res) => {
    const { name} = req.body
    Category.create({
        name,
    })
        .then(post => res.json({post}))
        .catch(err => res.status(400).json(err))
}


module.exports.findAllCategorys = (request, response) => {
    Category.find({}).populate('postsCat')
        .then(post => response.json(post))
        .catch(err => response.json(err))
}
 
module.exports.findOneSingleCategory = (req, res) => {
    Category.findOne({ _id: req.params.id })
        .then(oneSingleCategory => res.json({ post: oneSingleCategory }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 

module.exports.updateExistingCategory = (req, res) => {
    Category.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedCategory => res.json({ post: updatedCategory }))
        .catch(err => res.status(400).json(err ));
}
 
module.exports.deleteAnExistingCategory = (req, res) => {
    Category.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}