const {Genre, validate} = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) =>{
    const genres = await Genre.find().sort('name');
    res.send(genres);
    console.log(genres);
})

router.post('/', async(req, res)=> {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    genre = new Genre({name:req.body.name });

    await genre.save();

    res.send(genre)

    console.log(genre);

});


router.put('/:id', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const genre = await Genre.findByIdAndUpdate(req.params.id,  {
      $set: {
      name: req.body.name ,
      new: true }
    });
  
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    
    res.send(genre);
    console.log(genre);
  });
  

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
  
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  
    res.send(genre);
    console.log("Deleted" , genre)
  });
  
  router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);
  
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  
    res.send(genre);
    console.log(genre)
  });
  

//Get by genrename 
router.post('/:genreType', async(req, res)=>{
    try{
         const genreType= req.params.genreType;
         if(genreType != ''){
             var result = {genreType:genreType}
         }
         Student.find(result)
         .then(function (FilteredGenre){
             const count= FilteredGenre.length  //will count the number of students
             res.status(201).json({Total_genres: count, FilteredGenre}); //output= total and data
         })
    } catch(err){
         return 
         res.status(403).send({Error: err.message});
     }
});

module.exports = router;