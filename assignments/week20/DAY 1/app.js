const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('config');

const users = require('./routes/users');

if(!config.get('jwtPrivateKey')){
    console.log('--FATAL ERROR: jwtPrivatKey is nor defined--')
    process.exit(1)     //for failure exit(1)   for success exit(0) 
}

mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/0608W20D1ass?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(() => console.log('--connected to db--'))
.catch(err => console.error('====Unable to connect====',err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(expres.json());


const port = process.env.PORT || 1212;
app.listen(port, ()=> console.log(`---connected to ${port}----`));
