'use strict'
const Mencuesta = require('../models/encuesta')

function getencuestas(req,res){
    Mencuesta.find((err,fue)=>{
        if (err) return res.status(500).send({message: err})

        if (!fue) return res.status(404).send({message: 'fuel no encontrado'})
        else {res.status(200).send({fue})
                  
    }
    })

}

function getencuesta(req,res,id){
    
    Mencuesta.findById(id,(err,produc)=>{
        if (err) return res.status(500).send({message: 'error al buscar: ${err}'})
        if (!produc) return res.status(404).send({message: 'el producto no existe'})
    
        res.status(200).send({ produc})
    })

    }

    function insertarencuesta(req,res){
        const encuesta = new Mencuesta({
            company: '5b61a1160d8738a59ce4f90a',
            tittle: 'primera'
        })
        
        encuesta.save((err) =>{
            if (err) return res.status(500).send({message: 'error al crear encuesta:'+err})
        
            return res.status(200).send(encuesta)
        })
    }



module.exports = {
    getencuestas,
    getencuesta,
    insertarencuesta
}