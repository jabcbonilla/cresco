'use strict'

var preg = mongoose.model('pregunta')
var enc = mongoose.model('encuesta')

const mongoose = require('mongoose')

var encuestaSchema = mongoose.Schema({
    _id: { preg: {type: Schema.ObjectId,ref: "preg"},
         encuesta: {type: Schema.pregObjectId,ref: "preg"}},
    respuesta: String || Number
})