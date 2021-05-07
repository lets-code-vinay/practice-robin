const express = require('express');
const router = express.Router();
const _ = require('lodash');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const {User, validate} = require('../models/user');

router.get('/',auth,  async(req, res)=>{
    const user = await(await User.findById(req.user._id)).isSelected('-password');
    res.send(user);
    console.log(user);
});

router.post('/', async(req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(errors.details[0].message);

    let user = await User.fineOne({email:req.body.email}); //find by email
    if(user) return res.status(400).send('--User is already registered---');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    //Hashing password
    const salt = await bcrypt.genSalt(10);   
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user,['_id', 'email']));
    console.log(user);

});

router.get(':/id', async(req, res) =>{
    const user = await User.findById(req.params.id);

    if(!user) return res.status(400).send('--The user in not available---');

    res.send(user);
});

module.exports= router;

