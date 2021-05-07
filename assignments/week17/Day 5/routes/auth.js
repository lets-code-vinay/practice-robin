const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();

router.post('/', async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    let user = await user.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Invalid Email password- Bad request")

    const validPassword = bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Invalid email or password- Bad request..');

    res.send(true);
});
//validation function is not done--- this is for testing purpose

module.exports = router;
