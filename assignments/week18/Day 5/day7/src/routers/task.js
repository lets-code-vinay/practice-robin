const express = require('express')
const taskController = require('../controller/task')
const router = new express.Router()

router.post('/tasks',taskController.createTask )

router.get('/tasks',taskController.getAllTask )

router.get('/tasks/:id',taskController.getSingleTask )

router.patch('/tasks/:id',taskController.updateTask )

router.delete('/tasks/:id',taskController.deleteTask )

module.exports = router