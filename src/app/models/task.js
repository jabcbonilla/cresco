const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	valor: Number,
	estatus: {
		type: Boolean,
		default: false,
	}
});

module.exports = mongoose.model('tasks', TaskSchema);