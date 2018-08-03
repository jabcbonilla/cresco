'use strict'

const mongoose = require('mongoose')
const Musuario = require('../models/user')

function getUsuarios(req,res){
    Musuario.find((err,usuario)=>{
        if (err) return res.status(500).send({message: err})

        if (!usuario) return res.status(404).send({message: 'usuario no encontrado'})
        else res.status(200).send({ usuario })

    })
}


function registrar(req,res){
const usuario = new Musuario({
    email: "Jbonilla",
    alias: "peluca",
    nombre: "jose",
    password: "1234"
})

usuario.save((err) =>{
    if (err) return res.status(500).send({message: 'error al crear usuario:'+err})

    return res.status(200).send(usuario)
})
}

function Iniciarsesion(req,res,mail,ps){
    
    Musuario.find({email: mail},(err,usuario)=>{
        if (err) return res.status(500).send({message: err})

        if (!usuario) return res.status(404).send({message: 'usuario no encontrado'})
        else if(usuario.password == ps) {
            req.usuario = usuario
            res.status(200).send({message: 'te has logueado exitosamente'+ usuario        })
            return true;
        }
        else {return false}
            

    })
}

module.exports = {
    Iniciarsesion,
    registrar,
    getUsuarios
}