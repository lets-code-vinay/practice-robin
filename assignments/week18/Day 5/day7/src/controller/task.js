const Task = require('../models/task')

module.exports = {
    createTask: async (req, res) => {
        const task = new Task(req.body)
    
        try {
            await task.save()
            res.status(201).send(task)
        } catch (e) {
            res.status(400).send(e)
        }
    },
    getAllTask: async (req, res) => {
        try {
            const tasks = await Task.find({})
            res.send(tasks)
        } catch (e) {
            res.status(500).send()
        }
    },
    getSingleTask: async (req, res) => {
        const _id = req.params.id
    
        try {
            const task = await Task.findById(_id)
    
            if (!task) {
                return res.status(404).send()
            }
    
            res.send(task)
        } catch (e) {
            res.status(500).send()
        }
    },
    updateTask: async (req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['description', 'completed']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }
    
        try {
            const task = await Task.findById(req.params.id)
    
            updates.forEach((update) => task[update] = req.body[update])
            await task.save()
    
            if (!task) {
                return res.status(404).send()
            }
    
            res.send(task)
        } catch (e) {
            res.status(400).send(e)
        }
    },
    deleteTask: async (req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params.id)
    
            if (!task) {
                res.status(404).send()
            }
    
            res.send(task)
        } catch (e) {
            res.status(500).send()
        }
    }

}