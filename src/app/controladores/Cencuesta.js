menc = require('../modelos/encuesta')


function getencuestas(req,res){
    menc.find((err,fue)=>{
        if (err) return res.status(500).send({message: err})

        if (!fue) return res.status(404).send({message: 'fuel no encontrado'})
        else {res.status(200).send({ fue })
              }
    })

}

function getencuesta(req,res,id){
    var enc = id
    
    menc.findById(enc,(err,produc)=>{
        if (err) return res.status(500).send({message: 'error al buscar: ${err}'})
        if (!produc) return res.status(404).send({message: 'el producto no existe'})
    
        res.status(200).send({ produc})
    })

    }




module.exports = {
    getencuestas,
    getencuenta,
    ingresarencuesta
}