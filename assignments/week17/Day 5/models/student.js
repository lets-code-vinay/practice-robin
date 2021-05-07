const Joi = require('joi');
const mongoose = require('mongoose');
const {bookSchema} = require('./book')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: 2,
        maxlength: 150
    },
    fathersName:{
        type:String,
        required: true,
        minlength: 2,
        maxlength: 150
    },
    email:{
        type:String,
        required: true,
        unique:true,
        minlength: 2,
        maxlength: 150
    },
//=============
    // dateOfBirth:{
    //     day:{
    //         type:Number,
    //         reuired: true,
    //         minlength: 01,
    //         maxlength:31
    //     },
    //     month:{
    //         type:Number,
    //         reuired: true,
    //         minlength: 01,
    //         maxlength:12
    //     },
    //     year:{
    //         type:Number,
    //         reuired: true,
    //         minlength: 1990,
    //         maxlength:2010
    //     },
    // },
//--------
    DOB:{
        type:Date
    },
    married:{
        type:Boolean,
        required: true
    },
    class:{
        type:Number,
        required: true,
        minlength: 2,
        maxlength: 12
    },
    phone:{
        type:Number,
        required: true,
        minlength: 0000000000,
        maxlength: 9999999999
    },
    location:{
        type:String,
        required: true,
    },
    book:{
        type:bookSchema,
        required: true,
    },   
})
const Student = mongoose.model('Student', studentSchema)

//Validation

function validateStudent(student){
    const schema= {
        name:Joi.string().min(2).max(250).required(),
        fathersName:Joi.string().min(2).max(250).required(),
        email:Joi.string().min(2).max(250).required(),
        // dateOfBirth:{
        //     day:Joi.number().min(1).max(31).required(),
        //     month:Joi.number().min(1).max(12).required(),
        //     year:Joi.number().min(1990).max(2020).required(),
        // },
        DOB:Joi.date().required(),
        married:Joi.boolean().required(),
        phone:Joi.string().min(2).max(250).required(),
        location:Joi.string().min(2).max(250).required(),
        bookId:Joi.string().required()
    }
    return Joi.validate(student,schema)
}

exports.Student = Student;
exports.validate = validateStudent;