
'use strict'

const mongoose = require('mongoose')

var companySchema = mongoose.Schema({
    nombre: String,
    fecha_i: Date
    })



module.exports = mongoose.model('company',companySchema)