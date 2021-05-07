const mongoose = require('mongoose')
const app = require('./app');

const DB = "mongodb://localhost:27017/day4"

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then((con) => {
		console.log('DATABSE connected successfully');
	});


app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
