const Joi = require('joi');
const mongoose = require('mongoose');

const Student = mongoose.model('Student', new mongoose.Schema({
    firstname :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastname :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
    },
    mobile :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
    },
    address:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 150
    },
    pincode :{
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    state :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    country :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password :{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 150
    },
    isSingle:{
        type:Boolean,
        required: true
    }
}))

//Validation
function validateStudent(student){
    const schema={
        firstname:Joi.string().min(3).max(50).required(),
        lastname:Joi.string().min(3).max(50).required(),
        email:Joi.string().min(3).max(50).required(),
        mobile:Joi.number().min(7300000000).max(9999999999).required(),
        pincode:Joi.number().min(000000).max(999999).required(),
        address:Joi.string().min(3).max(150).required(),
        password:Joi.string().min(3).max(150).required(),
        state:Joi.string().min(3).max(50).required(),
        country:Joi.string().min(3).max(50).required(),
        isSingle:Joi.boolean().required(),    
    };
    return Joi.validate(student,schema)
}

exports.Student = Student;
exports.validate = validateStudent;






