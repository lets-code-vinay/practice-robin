// Create a REST API calculator using ExpressJS
// Create four routes in Express for add, sub, mul and div.
// Each route should take two POST data parameters - num1 and num2 in JSON format and do the arithmetic operation on them.
// Example output: For sum, the response should look like -
// {
//     "num1": 20
//     "num2": 50,
//     "result": 70
// }
const Joi = require('joi')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

//Connecting to data base
mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/codingchallenge?retryWrites=true&w=majority')
.then(()=>console.log('__Connected to database'))
.catch(err=> console.err('____Unable to connect database____'))

//Creating Schema
const Calculator = mongoose.model('Student', new mongoose.Schema({
        num1 :{
            type: Number,
            required: true
        },
        num2 :{
            type: Number,
            required: true
        },
        result :{
            type: Number,
            required: true
        }
}))

//Getting data
app.get('/', async(req, res)=>{
   const calculator= await Calculator.find().sort('result');
   res.send(calculator) 
   console.log(calculator)
})

//Psting the data
app.post('/sum', async(req, res)=>{
    const {error} = validateCalculator(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const calculator = {
        num1 : req.body.num1,
        num2: req.body.num2,
        result: num1 + num2
    };
    calculator.push(calculator);
    res.save(calculator);
    console.log(calculator)
})


//Validation 
function validateCalculator(calculator){
     const schema= {
         num1: Joi.number().required(),
         num2: Joi.number().required(),
         result :Joi.number()
     };
     return Joi.validate(calculator, schema);
}

const port = process.env.PORT||1212
app.listen(port,()=> console.log(`___ Server Running on port : ${port}`))