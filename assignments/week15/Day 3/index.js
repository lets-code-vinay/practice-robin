//issue-- id and objectId are not responding
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path= require('path');
const Joi = require('joi');
const ejs = require('ejs');
app.use(express.json());
//view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Database setuo
  const db = mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/assweek15d3?retryWrites=true&w=majority')
    .then(()=> console.log('......Connected to MongoDB......'))
    .catch(err => console.error('Unable to connect MongoDB. please check network........'))
    
//Schema    
const Data = mongoose.model('Data', new mongoose.Schema({
    userId:{
            type:Number,
            required: true
    },
    id:{
        type:Number,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    body:{
        type:String}
}))

//Get data from mongoDB to frontEnd
// app.get('/data', async (req, res)=> {
//         const dbData = await Data.find({}).exec(function(err,data){
//             if(err) throw err;
//             res.render('home', {title: 'Assignment', records: data});
//         });
// })

//GET data
app.get('/home', async(req, res) => {

        const data = await Data.find({}).exec(function(err,data){
          if(err) throw err;
            res.render('home', {title: 'Assignment', records: data});
        });
//postman
        // const data = await Data.find({}).sort()
        // res.send(data);
        // console.log(data);
        
});


// 

//POST Data postman
app.post('/api/data', async(req, res)=> {
    const {error} = validateData(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    let data = new Data(
        { userId:req.body.userId,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body }) ;

        data = await data.save();
        res.send(data);
        console.log(data);
});

//POST Data Add-Form process
app.post('/api/data', async(req, res, next)=> {
    const {error} = validateData(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    let data = new Data(
        { userId:req.body.userId,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body }) ;

        data = await data.save()
        res.send(data)
        console.log(data);
});

//Put request
app.put('/api/data/:id',async (req, res)=>{
    const {error} = validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const data = await Data.findByIdAndUpdate(req.params.id,
    {   userId: req.body.userId,
        id:req.body.id,
        title:req.body.title,
        body: req.body.body
        }, {new : true});

    if(!data) return res.status(404).send('The Data with idwas not matched');
    res.send(data);
    console.log(data);
});

//Delete by Id
app.delete('/api/delete:id', async(req, res)=>{
    const data = await Data.findByIdAndDelete(req.params.id);
    if(!data) return res.status(404).send("The data was not found..");

    res.send(data);
    console.log(data, "____Successfully deleted")
})

//Get by id
app.get('/api/data/:id', async(req, res)=>{
    const data = await Data.findById(req.params.id);
    if(!data) return res.status(404).send('The Data with given id wasnot matched');

    res.send(data);
    console.log(data)
})
//Front end part
//To display Hompage
app.get('/',async (req, res)=>{
    const data = await Data.find({}).exec(function(err,data){
        if(err) throw err;
    res.render('home',{title: 'Assignment', records: data});
});
});

//Get form 
app.get('/add', (req, res)=>{
    res.render('add-form')
})
//POST Data Add-Form process
app.post('/add', async(req, res, next)=> {
    console.log(req.body);
    const {error} = validateData(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    let data = new Data(
        { userId:req.body.userId,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body }) ;

        await data.save(function(err){
            if (err ){
                res.render('add-form', {message:'User resigtration failed..'})
            }
            else{
                res.render('add-form', {message:'User registered Successfully...'})
            }
        });
        res.render('add-form')
        console.log(data);
        res.send(data);
});
//List table data at Display
app.get('/display', function(req, res){
     const data = Data.find({})
    // const data = Data.find(function(err, data){
    //     if(err){ 
    //         console.log(err);
    //     } else{
             res.render('display', {records: data});
             console.log(data)
    //     }
   // })
})

//Validation Data
function validateData(data){
    const schema = {
        userId:Joi.number().required(),
        id: Joi.number().required(),
        title: Joi.string().required(),
        body: Joi.string()
    };
    return Joi.validate(data,schema);
}

const port = process.env.PORT|| 3000;
app.listen(port, ()=> console.log(`Listening on port -- ${port}...`))