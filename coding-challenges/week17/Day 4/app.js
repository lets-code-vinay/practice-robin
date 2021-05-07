const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose')
const students = require('./routes/students');
const auth = require('./routes/auth');

mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/assW17D4?retryWrites=true&w=majority')
.then(()=> console.log('----Connected to MongoDb---'))
.catch (err => console.log('----Unable to connect with DB---'));



//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json())
app.use('/api/students', students);
app.use('/api/auth', auth);

//listening server
const port= process.env.PORT|| 1122;
app.listen(port, ()=> console.log(`--the server is active on portt: ${port}`));