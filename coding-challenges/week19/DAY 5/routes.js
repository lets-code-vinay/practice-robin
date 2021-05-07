const express = require('express');
const router = express.Router();
const {Data,validate} = require('./model');

router.get('/', async(req, res) =>{
    const data = await Data.find().sort('title');
    res.send(data);
    console.log(data)

});

router.post('/', async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const data = new Data({
        author:req.body.author,

    });
    await data.save();
    console.log(data);
    res.send(data)
});

module.exports = router;