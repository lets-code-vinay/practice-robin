const express = require('express');
const {getAlltask,createtask} = require('../controllers/taskController');

const router = express.Router();

router.route('/')
    .get(getAlltask)
    .post(createtask);

module.exports = router;
