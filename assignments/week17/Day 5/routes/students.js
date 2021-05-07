const {Book,validate} = require('../models/book');
const {Genre} = require('../models/genre');
const {Student} = require('../models/student')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const students = await Student.find().sort('name');
    res.send(students);
    console.log(students);
});

router.post('/', async (req, res) =>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const book = await Book.findById(req.body.bookId);
    if(!book) return res.status(400).send('Invalid book..');



    let student = new Student({
            name: req.body.name,
            fathersName: req.body.fathersName,
            email: req.body.email,
            // dateOfBirth: { day: req.body.day,
            //         month: req.body.day,
            //         year: req.body.day,  },
            DOB: req.body.DOB,
            married: req.body.married,
            class: req.body.class,
            phone: req.body.phone,
            location: req.body.location,
            book:{
                _id: book._id,
                name: book.name
                // author: book.author,
                // genre:{
                //     _id: genre._id,
                //     name: book.name,
                // },
                // publishedYear: book.publishedYear,
                // rating: book.rating
            }
        });
        student = await student.save()
        res.send(student);
        console.log(student);
});
//-------post man
// {
//     "name": "Arjun",
//     "fathersName": "Vinay",
//     "email": "arjun@vinay",
//     "DOB": "21/10/2020",
//     "married": false,
//     "class": 8,
//     "phone": 1212121212,
//     "location": "Pune",
//     "bookId": "5ecb58022c1b2c5653d56ab0"
// }

// router.put('./:id', async (req, res) => {
//     const {error} = validate(req.body);
//     if(error) return res.status(400).send(error.details[0].message);

//     const genre = await Genre.findById(req.body.genreId);
//     if(!genre) return res.status(400).send('Invalid genre...');

//     const book = await Book.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         genre: {
//             _id: genre._id,
//             name: genre.name
//         },
//         author: req.body.author,
//         publishedYear: req.body.publishedYear,
//         rating: req.body.rating
//     }, {new: true});

//     if (!book) return res.status(404).send('The book with the given ID was not found..')
//     res.send(book);
//     console.log(book)
// });

// router.delete('/:id', async (req, res) => {
//     const book = await Book.findByIdAndRemove(req.params.id);

//     if(!book) return res.status(404).send('The book with the given Id not found');
//     res.send(book);
//     console.log(book +'deleted.............')
// });
// router.get('/:id', async (req, res) => {
//     const book = await Book.findById(req.params.id);

//     if(!book) return res.status(404).send('The book with given id was not found..')
//     res.send(book, '----Deleted');
//     console.log(book)

// });

// //Filter by name of book
// router.post('/author/:author', (req, res)=>{
//     try{
//         const author= req.params.author
//         if(author != '');
//         var result = {author:author}
//         Book.find(result)
//             .then(function (filteredBook){
//                 const count = filteredBook.length
//                 res.status(201).json({total_books: count, filteredBook})
//             }) 
//     } catch(err){ 
//             return res.status(403).send({Error:err.message})
//     }
// });
//________________________________________________________________________

module.exports = router;
