const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	pregunta: String,
	tipo: Number,
	opc1: String,
	opc: String,
	opc2: String,
	opc3: String,
	opc4: String,
	opc5: String,
	opc6: String,
	cant1: Number,
	cant2: Number,
	cant3: Number,
	cant4: Number,
	cant5: Number,
	cant6: Number
	
});

module.exports = mongoose.model('tasks', TaskSchema);