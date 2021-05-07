const mongoose = require('mongoose');
const Joi = require('joi');


const User = mongoose.model('User', new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:2,
        maxlength: 100
    },
    email:{
        type:String,
        required: true,
        minlength:2,
        maxlength: 100,
        unique: true
    },
    
    password:{
        type:String,
        required: true,
        minlength:6,
        maxlength: 250
    }
}))

//Validation
function validateUser(user){
    const schema = {
        name: Joi.string().min(2).max(150).required(),
        email: Joi.string().min(2).max(150).required(),
        password: Joi.string().min(6).max(250).required(),
     };
    return Joi.validate(user,schema)
}

exports.User = User;
exports.validate = validateUser;