const express = require('express');
const bodyParser = require('body-parser');

const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/task', taskRouter);

module.exports = app;
