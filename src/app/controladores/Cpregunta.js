'use strict'

const mongoose = require('mongoose')
const Mpregunta = require('../models/pregunta')

function getpreguntas(req,res){
    Mpregunta.find((err,fue)=>{
        if (err) return res.status(500).send({message: err})

        if (!fue) return res.status(404).send({message: 'pregunta no encontrado'})
        else {res.status(200).send({ fue })
              }

    })
}

function insertpregunta(req,res){
    const pregunta = new Mpregunta({
        descripcion: "Proceso de Check-out | Check-out process",
    tipo: "escala",
    })
    
    pregunta.save((err) =>{
        if (err) return res.status(500).send({message: 'error al crear pregunta:'+err})
    
        return res.status(200).send(pregunta)
    })
}


module.exports ={
    getpreguntas,
    insertpregunta,
}