const Joi = require('joi');
const mongoose = require('mongoose');

const Data = mongoose.model('Data', new mongoose.Schema({
    
        author: {
            type:String,
            required: true
        },
        country:{
            type:String,
            required: true

        },
        imageLink:{
            type:String,
            required: true

        },
        language:{
            type:String,
            required: true

        },
        link:{
            type:String,
            required: true

        },
        pages:{
            type:Number,
            required: true

        },
        title:{
            type:String,
            required: true
        },
        year:{
            type:Number,
            required: true,
            minlength: 0000,
            maxlength: 3000

        }
    
}));



//validate
function validateData(data){
    const schema= {
        author: Joi.string().require(),
        country: Joi.string().require(),
        imageLink: Joi.string().require(),
        language: Joi.string().require(),
        link: Joi.string().require(),
        pages: Joi.number().require(),
        title: Joi.string().require(),
        year: Joi.number().min(000).max(3000).require(),
    }
    return Joi.Validate(data,schema );
};

exports.Data = Data;
exports.validate = validateData;