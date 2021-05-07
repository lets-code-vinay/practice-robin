const express = require('express')
const userController = require('../controller/user')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/users',userController.createUser )

router.post('/users/login',userController.loginUser )

router.get('/users/me', auth,userController.getUser)

router.patch('/users/:id',auth,userController.updateUser )

router.delete('/users/:id',auth,userController.deleteUser)

module.exports = router