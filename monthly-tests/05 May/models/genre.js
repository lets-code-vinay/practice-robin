const Joi =  require('joi');
const mongoose = require('mongoose');

const genreSchema=  new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:2,
        maxlength:150
    }
})
const Genre = mongoose.model( 'Genre', genreSchema)

//Validation
function validateGenre(genre){
    const schema= {
        name: Joi.string().min(2).max(150).required()
    }
    return Joi.validate(genre, schema)
}

exports.genreSchema = genreSchema;
exports.Genre= Genre;
exports.validate= validateGenre;