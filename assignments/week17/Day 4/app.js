const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const mongoose= require('mongoose');

const user = require('./routes/users')
const auth = require('./routes/auth');
const genre = require('./routes/genres')

mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/assW17D4library?retryWrites=true&w=majority',{ useUnifiedTopology: true } )
.then(()=> console.log('------Datebase connected successfully------'))
.catch(err => console.log('----Alas!!! unable to connect database------'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/genre', genre)

//Server
const port = process.env.PORT||3333;
app.listen(port, () => console.log(`------The server is running on port: ${port}-----`));
