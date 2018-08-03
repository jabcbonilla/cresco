'use strict'

const mongoose = require('mongoose')
const Musuario = require('../models/usuario')

function singUp(req,res){
const usuario = new Musuario({
    email: req.body.email,
    alias: req.body.alias,
    nombre: req.body.nombre,
    password: req.body.password
})

usuario.save((err) =>{
    if (err) return res.status(500).send({message: 'error al crear usuario:'+err})

    return res.status(200).send(usuario)
})
}

function singIn(req,res){
    
    usuario.find({email: req.body.email},(err,usuario)=>{
        if (err) return res.status(500).send({message: err})

        if (!usuario) return res.status(404).send({message: 'usuario no encontrado'})

            req.usuario = usuario
            res.status(200).send({message: 'te has logueado exitosamente'+ usuario.email})
    })
}

module.exports = {
    singIn,
    singUp
}