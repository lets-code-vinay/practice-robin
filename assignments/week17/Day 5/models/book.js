const mongoose = require('mongoose');
const Joi = require('joi');
const {genreSchema} = require('./genre');

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:2,
        maxlength: 100
    },
    author:{
        type:String,
        required: true,
        minlength:2,
        maxlength: 100
    },
    genre:{
        type:genreSchema,
        required: true
    },
    publishedYear:{
        type:Number,
        required: true,
        minlength:0000,
        maxlength: 2022
    },
    rating:{
        type:Number,
        required: true,
        minlength:0,
        maxlength: 10
    }
})

const Book = mongoose.model('Book', bookSchema)
//Validation
function validateBook(book){
    const schema = {
        name: Joi.string().min(2).max(150).required(),
        author: Joi.string().min(2).max(150).required(),
        genreId:Joi.string().required(),
        publishedYear: Joi.number().min(0000).max(2022).required(),
        rating: Joi.number().min(2).max(150).required()
    };
    return Joi.validate(book,schema)
}

exports.bookSchema= bookSchema;
exports.Book = Book;
exports.validate = validateBook;