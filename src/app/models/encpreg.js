'use strict'

const mongoose = require('mongoose')

//var preg = mongoose.model('pregunta')
//var enc = mongoose.model('encuesta')

var encSchema = mongoose.Schema({
    //_id: { preg: {type: Schema.ObjectId,ref: "preg"},
      //   encuesta: {type: Schema.pregObjectId,ref: "enc"}},
      pregunta: String, 
      encuesta: String,
    respuesta: String
})



module.exports = mongoose.model('encpreg',encSchema)