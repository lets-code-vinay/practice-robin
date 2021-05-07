const _ = require('lodash');
const bcrypt = require('bcrypt');
const {Student, validate}= require('../models/student');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/', async function (req, res){
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let student = await Student.findOne({email:req.body.email}); //finding the existing student
    if(student) return res.status(400).send('Student email is already registered- bad request');

    student = new Student({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        pincode: req.body.pincode,
        state: req.body.state,
        country: req.body.country,
        password: req.body.password,
        isSingle: req.body.isSingle
        });
    
   //student = new Student(_.pick(req.body,['firstname','lastname','email','password','mobile','pincode','address','state', 'country']))

//hashing the password
    const salt = await bcrypt.genSalt(10);

    student.password = await bcrypt.hash(student.password, salt) ;

    await student.save(); //saving the student in db

//res.send(student)
//To see detail of user save in db
res.send({
        firstname: student.firstname,
        lastname: student.lastname,
        email: student.email,
        mobile: student.mobile,
        address: student.address,
        pincode: student.pincode,
        state: student.state,
        country: student.country,
        password:student.password,
        isSingle: student.isSingle
})

//using lodash 
//res.send(_.pick(student,['_id','firstname','lastname','email','mobile','pincode','address','state', 'country']))

console.log(student);

})
module.exports = router;