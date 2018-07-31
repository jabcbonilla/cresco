
'use strict'

const mongoose = require('mongoose')

var fuelSchema = mongoose.Schema({
    month:String,
    petrol: Number,
    diesel: Number,
    })



module.exports = mongoose.model('fuel',fuelSchema)