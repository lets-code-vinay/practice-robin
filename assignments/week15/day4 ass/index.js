const morgan = require('morgan')
const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('tiny'));
app.set('views',path.join(__dirname, 'views') );
app.set('view engine', 'ejs');

//Connecting to MongoDB
mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/tennis?retryWrites=true&w=majority')
.then(()=> console.log('....connected to database...'))
.catch(err => console.err('..unable to connect db'));


//Schema of Tenis Player
const Tennis =mongoose.model('Tennis', new mongoose.Schema({
    name:{
        type:String,
        require: true,
        minlength: 3,
        maxlenght: 60,
        trim: true
    },
    country:{
        type:String,
        require: true,
        minlength: 3,
        maxlenght: 60,
        trim: true
    }
}));
app.use(express.json());
/*
//_______________Api Routing________________
//Getting data
app.get('/TennisPlayers', async (req, res)=>{
    const tennisPlayers = await Tennis.find().sort('name');
    res.send(tennisPlayers);
    console.log(tennisPlayers)
})
// Get single player
app.get('/tennisPlayer/:id', async(req, res)=>{
        const tennis =await Tennis.findById(req.params.id);
        if(!tennis) return res.status(404).send('Tne player is not found');

        res.send(tennis);
        console.log(tennis);
})
//posting data
app.post('/addTennisPlayer', async(req, res)=>{
    const {error} = validateTennis(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    const tennis=new Tennis({
        name:req.body.name,
        country:req.body.country
    });

    await tennis.save();
    res.send(tennis);
    console.log(tennis);
})
//Updatio of tennis player
app.put('/tennisPlayer/:id', async(req, res)=>{
    const {error} = validateTennis(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const tennis = await Tennis.findByIdAndUpdate(req.params.id, 
        {name: req.body.name, 
        country: req.body.country},
        {new: true})

        if(!tennis) return res.status(404).send('THis tennis player wasnot found')
            //tennis.save();
            res.send(tennis);
            console.log(tennis)
})

//Delete
app.delete('/tennisPlayer/:id', async(req, res)=>{
    const tennis = await Tennis.findByIdAndDelete(req.params.id);

    if(!tennis) return res.status(404).send('Given player is not found');

    res.send(tennis);
    console.log('____Deleted', tennis)
});
*/
//__________Front end editing________

//Getting data
app.get('/players',  (req, res)=>{
    const tennisPlayers =  Tennis.find({}).exec(function(err,tennis){
       if(err){
           console.log(err);
       } else{
            //res.send(tennisPlayers);
            res.render('viewplayers', {title:'Tennis stars', player:tennis})
            console.log(tennisPlayers)   
        }})
    })
//Show detail tab
app.get('/show', (req, res)=>{
    res.render('playerdetail')
})

//ERROR HERE TO BE FIXED
// Get single player -- Show player detail tabs
app.get('/player/:id', async(req, res)=>{
    const tennisPlayer =await Tennis.findById(req.params.id).exec(function(err, tennis){
             
            //if(err) return res.status(404).send('Tne player is not found');
            if(err){
                console.log(err,"Error finder")
            } else{
            //res.send(tennis);
            res.render('playerdetail', {player:tennis});
            console.log(tennisPlayer);    
            }
        });        
})

// GET the form
app.get('/addplayer', async(req, res)=>{
    res.render('tennis')
})
    //posting data ADDING PLAYER
app.post('/addplayer', async(req, res)=>{
    const {error} = validateTennis(req.body);
    console.log(req.body)
    
    if(error) return res.status(404).send(error.details[0].message);

    const playerinput =Tennis({
        name:req.body.name,
        country:req.body.country
    } );

    await playerinput.save();
    //res.send(tennis);
    console.log('-----Player registered---', playerinput);
})
// //Updation of tennis player
// app.put('/tennisPlayer/:id', async(req, res)=>{
//     const {error} = validateTennis(req.body);
//     if(error) return res.status(400).send(error.details[0].message);

//     const tennis = await Tennis.findByIdAndUpdate(req.params.id, 
//         {name: req.body.name, 
//         country: req.body.country},
//         {new: true})

//         if(!tennis) return res.status(404).send('THis tennis player wasnot found')
//             //tennis.save();
//             res.send(tennis);
//             console.log(tennis)
// })

// //Delete
    app.get('/player/:id',(req, res)=>{
        console.log(req.params.id);
        Tennis.findById(req.params.id, function(err, player){
            if(err){
                console.log(err, "the error is here");
            } else {
                console.log(player);
                res.render('playerdetail', {players :player})
            }
        })
    })
// app.delete('/tennisPlayer/:id', async(req, res)=>{
//     const tennis = await Tennis.findByIdAndDelete(req.params.id);

//     if(!tennis) return res.status(404).send('Given player is not found');

//     res.send(tennis);
//     console.log('____Deleted', tennis)
// });

//Validation of schema
function validateTennis(tennis){
    const schema={
        name:Joi.string().min(3).max(60).required(),
        country:Joi.string().min(3).max(60).required()
    };
    return Joi.validate(tennis, schema)
}

const port = process.env.PORT||2222;
app.listen(port,() => console.log(`__server is on ${port}`))