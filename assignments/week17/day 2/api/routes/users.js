const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport= require('../../config/passport')
const Users = require('../../models/users')
const bcrypt = require('../../models/users');
const validator = require('../../validators/validators');

router.post('/register', (req, res)=>{
    const {errors, isValid} = validator.registerValidator(req.body);
    if(!isValid){
        res.status(404).json(errors)
    }
        Users.findOne({email:req.body.email})
        .then((user)=> {
            if(user){
                res.status(404).json({"email": "Email id is already taken!!"})
            
            } else{
                const registerUser = new URLSearchParams({
                    name : req.body.name,
                    email:req.body.email,
                    password: req.body.password,
                    number : req.body.number
                })
                bcrypt.genSalt(10, (err,salt) =>{
                    bcrypt.hash(resigterUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        registerUser.password = hash;
                        registerUser.save()
                        .then((user)=> res.json(user))
                        .catch((err) => console.log(err))
                    })
                })
            }
        })
})

module.exports = router