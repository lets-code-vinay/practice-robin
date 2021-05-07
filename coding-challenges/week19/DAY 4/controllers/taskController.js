const Task = require('../models/taskModel');

exports.getAlltask = async (req, res) => {
	try {
		const task = await Task.find();

		res.status(200).json({
			status: 'success',
			results: task.length,
			task: {
				task
			}
		});
	} catch (err) {
		console.log(err);
	}
};

exports.createtask = async (req, res) => {
	try {
		const newtask = await Task.create(req.body);
		res.status(201).json({
			status: 'success',
			task: {
				data: String,
				message: newtask
			}
		});
	} catch (err) {
		err;
		console.log(err);
	}
};
