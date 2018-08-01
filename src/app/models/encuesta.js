
'use strict'
const mongoose = require('mongoose')
//var preg = mongoose.model('pregunta')
//const c = mongoose.model('company')


var encuestaSchema = mongoose.Schema({
  //  company: {type: Schema.ObjectId,ref: "c"},
  company: String,  
  tittle: String,
    fecha: {type: Date,
        default: Date.now}

})

module.exports = mongoose.model('encuesta',encuestaSchema)