const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const Users = require('./api/routes/users');
const UserModel = require('./models/users');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

mongodb=mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/Shopping?retryWrites=true&w=majority')
    .then(()=> console.log('____Connected successfully to DB'))
    .catch(err => console.log(err.message +'___Error occured'));

require('./config/passport')(passport)
app.use(passport.initialize())
app.use('/api/users', Users);

const port = process.env.PORT||1313;
app.listen(port, () => console.log(`connected to port : ${port}`));









