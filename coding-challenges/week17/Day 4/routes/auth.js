//User name and password validation
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const {Student} = require('../models/student');
const mongoose = require('mongoose');

//____________________________________________________________________________________________________
//--Get route
router.get('/call', async(req,res)=>{
    const students = await Student.find().sort('firstname');
    res.send(students);
    console.log('--All students are here--')
    console.log(students)
});
//____________________________________________________________________________________________________

//POST request
router.post('/', async function(req, res){
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const student = new Student({ email: req.body.email});
    if(!student) return res.status(400).send('Invalid student email or password -bad request');

    const validPassword = bcrypt.compare(req.body.password, student.password);
    if(!validPassword) return res.status(400).send("Invalid student email and password - bad request")

    res.send(true)
});
//____________________________________________________________________________________________________

//Get by ID
router.get('/:id', async(req, res)=>{
    const student = await Student.findById(req.params.id);
    if(!student) return res.status(404).send('The student is not found');

    res.send(student);
    console.log(student)
})
//____________________________________________________________________________________________________

//Get by state 
router.post('/state/:state', async(req, res)=>{
    try{
         const state= req.params.state;
         if(state != ''){
             var result = {state:state}
         }
         Student.find(result)
         .then(function (FilteredStudent){
             const count= FilteredStudent.length  //will count the number of students
             res.status(201).json({Total_students: count, FilteredStudent}); //output= total and data
         })
    } catch(err){
         return 
         res.status(403).send({Error: err.message});
     }
});

//get by country
router.post('/country/:country', async(req, res)=>{
    try{
         const country= req.params.country;
         if(country != ''){
             var result = {country:country}
         }
         Student.find(result)
         .then(function (FilteredStudent){
             const count= FilteredStudent.length  //will count the number of students
             res.status(201).json({Total_students: count, FilteredStudent}); //output= total and data
         })
    } catch(err){
         return 
         res.status(403).send({Error: err.message});
     }
});
//_______________________________________________________________________


//get by Student isSingle
router.post('/isSingle/:isSingle', async(req, res)=>{
    try{
         const isSingle= req.params.isSingle;
         if(isSingle != ''){
             var result = {isSingle:isSingle}
         }
         Student.find(result)
         .then(function (FilteredStudent){
             const count= FilteredStudent.length  //will count the number of students
             res.status(201).json({Total_students: count, FilteredStudent}); //output= total and data
         })
    } catch(err){
         return 
         res.status(403).send({Error: err.message});
     }
});
//_______________________________________________________________________

//PUT method -- not working again
router.put('/:id', async(req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    const student = await Student.findByIdAndUpdate(req.params.id,{
        firstname: req.body.firstname,
        lastname : req.body.lastname ,
        //email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        state: req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        isSingle: req.body.isSingle
    },
    {new: true});
    await student.save();
    res.send(student);
    console.log(student)
})
//______________________________________________________________________________

//Delete method
router.delete('/:id', async(req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id);
    if(!student) res.status(404).send("The Student is not found");

    console.log("The Student has been deleter", student)
    res.send(student);

})

//Validation 
function validate(req){
    const schema ={
        firstname: Joi.string().min(3).max(50).required(),
        lastname: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(3).max(150).required(),
        mobile: Joi.number().min(7300000000).max(9999999999).required(),  
        address: Joi.string().min(3).max(150).required(),
        state: Joi.string().min(3).max(50).required(),  
        country: Joi.string().min(3).max(50).required(),
        pincode: Joi.number().min(000000).max(999999).required(),    
        isSingle:Joi.boolean().required()
    }
    return Joi.validate(req.schema);
}
module.exports = router;