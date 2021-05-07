const express = require('express');
const router = express.Router();
const {signup, signin, requireSignin} = require('../../controller/admin/auth');

router.post('/admin/signup', signup);

router.post('/admin/signin', signin);

router.post('/profile', requireSignin, (req, res) =>{
    res.status(400).send({message: "hiii"})
})

module.exports = router;