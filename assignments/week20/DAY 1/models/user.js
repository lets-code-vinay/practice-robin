const mongoose = require('mongoose');
const JOi = require('joi');

const User = mongoose.model('User', new mongoose.Schema({
    name:{
        type:String,
        require: true,
        minlength: 2,
        maxlength:256,
    },
    email:{
        type:String,
        require: true,
        minlength: 2,
        maxlength:256,
    },
    password:{
        type:String,
        require: true,
        minlength: 2,
        maxlength:256,
    }
}));

//validation
function validateUser(user){
    const schema = {
        name: Joi.string().min(2).max(56).required(),
        email: Joi.string().min(2).max(56).required(),
        password: Joi.string().min(2).max(256).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;