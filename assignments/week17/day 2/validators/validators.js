const mongoose= require('mongoose');
const isEmpty = require('is-empty');
const validate = require('validator');


//Validation for Login
module.exports.loginValidator = this.loginValidator = function validateLoginInput(data){
 const errors = {}
 data.email= !(isEmpty(data.email))? data.email: '';
 data.password = !(isEmpty(data,password)) ? data.password: ' ';

    if(Validator.isEmpty(data.email)){
        error.email = "Email is required!!"
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'password is required!!'
    }
    if(!validator.isEmail(data.email)){
        errors.email = "please provide tne  vaild email ID!"
    }
    return{
        errors: errors,
        isValid: isEmpty(errors)
    }
}

//Validation for Registration
module.exports.registerValidator = this.registerValidator = function validateRegisterInput(data){
    const errors = {}
    data.email= !(isEmpty(data.email))? data.email: '';
    data.password = !(isEmpty(data,password)) ? data.password: ' ';
    data.name = !(isEmpty(data,name)) ? data.name: ' ';
    data.number = !(isEmpty(data,number)) ? data.number: ' ';
   
       if(Validator.isEmpty(data.email)){
           error.email = "Email is required!!"
       }
       if(Validator.isEmpty(data.password)){
           errors.password = 'password is required!!'
       }
       if(!validator.isEmail(data.email)){
           errors.email = "please provide tne  vaild email ID!"
       }

       return{
           errors: errors,
           isValid: isEmpty(errors)
       }
   }