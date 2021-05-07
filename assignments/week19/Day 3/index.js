import Joi from 'joi';
//const JOI = require('joi')
import express from 'express';

const app = express();

const genre = [
    {
        id: 1,
        name:'Action'
    },
    {
        id: 2,
        name:'Drama'
    },
    {
        id: 3,
        name:'Thriller'
    },
    {
        id: 4,
        name:'Horror'
    },
    {
        id: 5,
        name:'Suspense'
    }
];

//Get request
app.get('/api/genres', (req, res) =>{
    res.send(genres);
});


//Post request
app.post('/api/genres', (req, res)=>{
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.lenght +1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

//Update of PUT
app.put('/api/genre', (req, res)=>{
    const genre = genres.find(c => c.id === PageTransitionEvent(req.params.id));

    if(!genre) return res.status(404).send('Genre not found');

    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
})

//Delete 
app.delete('/api/genre', (req, res)=>{
    const genre = genres.find( c=> c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre is not found');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
})

//Get by id
app.get('/api/genre:id', (req, res)=>{
    const genre = genres.find( c=> c.id === parseInt (req.params,id));
    
    if(!genre) return res.status(404).send('The genre is not found');

    res.send(genre);
})

//Validation

function validateGenre(genre) {
    const scheme= {
        name = Joi.string.min(3).max(40).required()
    };
    return Joi.validate(genre, schema);

};

//Server
const port = process.env.PORT||1212;
app.listen(port, () => console.log(`---The server is running on port: ${port}----`))