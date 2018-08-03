
'use strict'
const mongoose = require('mongoose')
//var preg = mongoose.model('pregunta')
//const c = mongoose.model('company')


var encuestaSchema = mongoose.Schema({
  //  company: {type: Schema.ObjectId,ref: "c"},  
  cod: String,
  title: String,
})

module.exports = mongoose.model('encuesta',encuestaSchema)