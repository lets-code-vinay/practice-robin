const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const _ = require('lodash') //for shortening

router.post('/', async(req, res)=> {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.params.email});
    if(user) return res.status(400).send("the user is already registered...");

    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    //hashing password here

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //Lodash
    res.send(_.pick(user,['id', 'name',' email']))

    console.log(user);

})

module.exports = router;