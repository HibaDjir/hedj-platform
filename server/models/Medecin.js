const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MedecinSchema = new Schema({
    Wilaya:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wilaya"
    },
    user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"user",
    },
    NumeroTelephone:{
        type:String,
        require:true
    },
    etat:{
        type:String,
        enum:["Active",'Desactive'],
        require:true,
        default: "Desactive"
    },
    adr_pro:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Medecin', MedecinSchema)