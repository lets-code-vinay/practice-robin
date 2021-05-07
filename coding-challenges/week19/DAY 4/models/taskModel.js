const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: [ true, 'You must provide valid todo task' ]
	},
	time: {
		type: String,
		required: [ true, 'You must provide valid time of task' ]
	}
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
