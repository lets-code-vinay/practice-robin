const {Book,validate} = require('../models/book');
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const books = await Book.find().sort('name');
    res.send(books);
    console.log(books);
});

router.post('/', async (req, res) =>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre..');

    let book = new Book({
            name: req.body.name,
            genre:{
                _id: genre._id,
                name: genre.name
            },
            author:req.body.author,
            publishedYear: req.body.publishedYear,
            rating: req.body.rating
    });
    // for post rqst {     "title":"One Indian Girl",
    //     "genreId":"5ea3a8b85afc9431f43fc685",
    //     "author": "Chetan Bhagat",
    //     "rating": 6 }    
    book = await book.save()
    res.send(book);
    console.log(book);
});
router.put('./:id', async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre...');

    const book = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        author: req.body.author,
        publishedYear: req.body.publishedYear,
        rating: req.body.rating
    }, {new: true});

    if (!book) return res.status(404).send('The book with the given ID was not found..')
    res.send(book);
    console.log(book)
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndRemove(req.params.id);

    if(!book) return res.status(404).send('The book with the given Id not found');
    res.send(book);
    console.log(book +'deleted.............')
});
router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);

    if(!book) return res.status(404).send('The book with given id was not found..')
    res.send(book, '----Deleted');
    console.log(book)

});

//Filter by name of book
router.post('/author/:author', (req, res)=>{
    try{
        const author= req.params.author
        if(author != '');
        var result = {author:author}
        Book.find(result)
            .then(function (filteredBook){
                const count = filteredBook.length
                res.status(201).json({total_books: count, filteredBook})
            }) 
    } catch(err){ 
            return res.status(403).send({Error:err.message})
    }
});
//________________________________________________________________________

module.exports = router;
