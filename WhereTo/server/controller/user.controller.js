const { User } = require('../model/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();


module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ post: oneSingleUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAllUsers = (request, response) => {
    User.find({})
        .then(post => response.json(post))
        .catch(err => response.json(err))
}


module.exports.createNewUser = (req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then(user => {
            console.log("asdasd"+ user);
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY)
            console.log("asd");
            res.cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user, token: userToken });
        })
        .catch(err => res.status(400).json(err));
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    .catch(err => res.status(400).json(err));
    if (user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.FIRST_SECRET_KEY);
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!", user: user, token: userToken })

}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({msg: "User Logged Out"});
    res.sendStatus(200);
}

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
  }
  