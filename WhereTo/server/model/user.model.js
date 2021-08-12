const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require("./post.model")
// const payload = {
//     id: user._id
// };

  // notice that we're using the SECRET_KEY from our .env file
// const userToken = jwt.sign(payload, process.env.SECRET_KEY);

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "First name is required"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    },
    posts:[{type:mongoose.Schema.Types.ObjectId, ref: 'Post' }],

  }, {timestamps: true});

  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

UserSchema.pre('validate', function(next) {
  console.log(this.password +"============"+ this.confirmPassword);
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
module.exports.User = mongoose.model("User", UserSchema);