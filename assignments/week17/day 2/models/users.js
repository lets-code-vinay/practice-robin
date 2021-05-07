const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    Date:{
        type:  Date,
        default: Date.now
    },
    number:{
        type: Number,
        required: true
    }
});

module.exports = Users = mongoose.model("Users", UserSchema)