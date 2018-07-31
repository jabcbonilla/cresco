'use strict'

const mongoose = require('mongoose')
const Mfuel = require('../models/fuel')

function getfuel(req,res){
    Mfuel.find((err,fue)=>{
        if (err) return res.status(500).send({message: err})

        if (!fue) return res.status(404).send({message: 'fuel no encontrado'})
        else {res.status(200).send({ fue })
              }

    })
}

function insertfuel(req,res){
    const fuel = new Mfuel({
        month: "Jan",
        petrol: "50",
        diesel: "43"
    })
    
    fuel.save((err) =>{
        if (err) return res.status(500).send({message: 'error al crear fuel:'+err})
    
        return res.status(200).send(fuel)
    })
}

    function getdata(req,res){
        Mfuel.find((err,docs)=>{
            if (err) return res.status(500).send({message: err})
    
            if (!docs) return res.status(404).send({message: 'fuel no encontrado'})
            else {
                           
                var monthArray = [];
                 var petrolPrices = [];
                 var dieselPrices = [];
              
                    for ( var i=0; i< docs.length;i++){
                        var doc = docs[i];
                      //category array
                      var month = doc['month'];
                      //series 1 values array
                      var petrol = doc['petrol'];
                      //series 2 values array
                      var diesel = doc['diesel'];
                      
                      monthArray.push({"label": month});
                      petrolPrices.push({"value" : petrol});
                      dieselPrices.push({"value" : diesel});
                      console.log(dieselPrices)
                      console.log(petrolPrices) 
                      var dataset = [
                        {
                          "seriesname" : "Petrol Price",
                          "data" : petrolPrices
                          
                        },
                        {
                          "seriesname" : "Diesel Price",
                          "data": dieselPrices
                        }
                      ];
              
                      var response = {
                        "dataset" : dataset,
                        "categories" : monthArray
                      };
                      console.log(response)
                    //return response;
                    }
                }
            
    
        })
    
    }
module.exports ={
    getfuel,
    insertfuel,
    getdata
}