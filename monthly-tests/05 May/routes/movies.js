const express = require('express');
const router = express.Router();
const {Movie, validate}  = require('../models/movie');
const {Genre} = require('../models/genre')

//get movie
router.get('/', async(req, res)=>{
    const movies = await Movie.find().sort('name');
    res.send(movies);
    console.log('The all movies are here', movies);
});

//get by Id

//Post movies
router.post('/', async(req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre..');

    let movie = await new Movie({
        name: req.body.name,
        cast: req.body.cast,
        director: req.body.director,
        yearOfRelease: req.body.yearOfRelease,
        rating: req.body.rating,
        genre: {
            _id:genre._id,
            name: genre.name
        },
    });
    movie = await movie.save();

    res.send(movie)
    console.log(movie);
})

// {
//     "name": "xyze",
//     "cast": "abccast",
//     "director": "abcdirector",
//     "yearOfRelease": 1980,
//     "rating": 9,
//     "genreId": "5ed20760d5babd2dd464ce21",
// }

//Put method

//Delete method

//Get by movie name   localhost:1234/api/movie/name
router.post('/:name', async(req, res)=>{
    try{
            const name = req.params.name;
            if(name != ''){
                var result = {name:name}
            }
            Movie.find(result)
            .then(function(filteredMovie){
                const count= filteredMovie.length
                res.status(201).json({Total_movie: count, filteredMovie})
            })
    } catch(err){
            return res.status(403).send({Error:err.message})
    }
});


// Get by actor name   localhost:1234/api/movies/cast/castname
router.post('/cast/:cast', async(req, res)=>{
    try{
            const cast = req.params.cast;
            if(cast != ''){
                var result = {cast:cast}
            }
            Movie.find(result).sort({ "yearOfRelease":1,"rating":-1})
            .then(function(filteredMovie){
                const count= filteredMovie.length
                res.status(201).json({Total_movie: count, filteredMovie})
           
                cosnole.log(result)
            })
    } catch(err){
            return res.status(404).send({Error:err.message})
    }
});

module.exports = router;
