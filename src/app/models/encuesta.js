import { Schema } from 'mongoose';

'use strict'
var preg = mongoose.model('pregunta')

const mongoose = require('mongoose')

var encuestaSchema = mongoose.Schema({
    pregunta: {type: Schema.ObjectId,ref: "preg"},
    fecha: {type: Date,
        default: Date.now}

})



module.exports = mongoose.model('encuesta',encuestaSchema)