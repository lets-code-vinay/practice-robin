const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan')

const genres= require('./routes/genres');
const movies = require('./routes/movies')

mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/05Maymonthlytest?retryWrites=true&w=majority', {useUnifiedTopology: true})
.then(()=> console.log('---Successfully connected to Database---'))
.catch(err => console.error('---UNABLE TO CONNECT TO DATABASE---'))

//middlewares
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/movies', movies);



//Server setup

const port = process.env.PORT|| 1234;
app.listen(port, ()=> console.log(`---The app is running on server ${port}----`));
