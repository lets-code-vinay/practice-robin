const express = require ('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const app = express();

const data = require('./routes')
mongoose.connect('mongodb+srv://vinuadmin:vinu123@cluster0-lxhhh.mongodb.net/0606w19d5?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/v1', data)

const port = process.env.PORT || 1212;
app.listen( port, () => console.log(`------Running on ${port}------`));
