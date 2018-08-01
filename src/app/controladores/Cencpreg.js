const mencpreg = require('./../models/encpreg')


function getencpregs(req,res){
    mencpreg.find((err,fue)=>{
        if (err) return res.status(500).send({message: err})

        if (!fue) return res.status(404).send({message: 'fuel no encontrado'})
        else {res.status(200).send({ fue })
              }
    })

}

function getencpreg(req,res,id){
    var enc = id
    
    mencpreg.findById(enc,(err,produc)=>{
        if (err) return res.status(500).send({message: 'error al buscar: ${err}'})
        if (!produc) return res.status(404).send({message: 'el producto no existe'})
    
        res.status(200).send({ produc})
    })

    }

    function insertarencpreg(req,res){
        const encpreg = new mencpreg({
          //_id:{ preg: "5b619e507cae49473fda8394", enc: '5b61a9b09200394f7701653c'},
          pregunta: "5b619e0e3119bd46ffc3efeb",
          encuesta: '5b61a9b09200394f7701653c',
          respuesta: 'Deficiente | Poor'
        })
        
        encpreg.save((err) =>{
            if (err) return res.status(500).send({message: 'error al crear encpreg:'+err})
        
            return res.status(200).send(encpreg)
        })
    }



module.exports = {
    getencpregs,
    getencpreg,
    insertarencpreg
}