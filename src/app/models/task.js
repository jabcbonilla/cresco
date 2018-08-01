const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	pregunta: String,
	tipo: Number,
	opc1: String,
	opc: String,
	cant1: Number,
	cant4: Number
	
});

module.exports = mongoose.model('tasks', TaskSchema);