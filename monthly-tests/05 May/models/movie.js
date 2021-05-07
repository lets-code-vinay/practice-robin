const Joi = require('joi');
const mongoose= require('mongoose')
const {genreSchema} = require('../models/genre')

const Movie = mongoose.model('Movie', new mongoose.Schema({
    name:{
        type:String,
        require: true,
        minlength:2,
        maxlength:150,
    },
    cast:{
        type:String,
        require: true,
        minlength:2,
        maxlength:150,
    },
    yearOfRelease:{
        type:Number,
        require: true,
        minlength:1800,
        maxlength:3000,
    },
    rating:{
        type:Number,
        require: true,
        minlength:1,
        maxlength:10,
    },
    director:{
        type:String,
        require: true,
        minlength:2,
        maxlength:150,
    },
    genre:{
        type:genreSchema,
        required:true
    }
}));


//Validation

function validateMovie(movie){
    const schema ={
        name:Joi.string().min(2).max(150).required(),
        rating:Joi.number().min(2).max(10).required(),
        yearOfRelease:Joi.number().min(1800).max(3000).required(),
        cast:Joi.string().min(2).max(150).required(),
        director:Joi.string().min(2).max(150).required(),
        genreId:Joi.string().required()
    }
    return Joi.validate(movie,schema)
}

exports.Movie= Movie;
exports.validate= validateMovie;