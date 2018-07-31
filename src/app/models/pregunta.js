
'use strict'

const mongoose = require('mongoose')

var preguntaSchema = mongoose.Schema({
    descripcion: String,
    tipo: String,
});


module.exports = mongoose.model('pregunta',preguntaSchema)