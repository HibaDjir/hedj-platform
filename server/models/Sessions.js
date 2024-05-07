const mongoose = require("mongoose");

const schema = mongoose.Schema

const SessionSchema = new schema({
    annee: {
        type: Number,
        require: true,
        unique: true 
    },
    nbr_candidats:{
        type: Number,
        require: true,
    },
    total_candidats_inscri: {
        type: Number,
    },
    state:{
        type: String,
        enum:["En cours", "Candidature", "Tirage", "Medecin","Paiement","Elhadj", "Cloture"],
        default:"En cours"
    },
    cotat:{
        type: Number,
        require: true,
    },
})

module.exports = mongoose.model('sessions', SessionSchema)

const candidature=require('../models/Candidature') 

async function total_candidats_inscriAndUpdate() {
    // Retrieve value from Schema 1
    const total_candidats = await candidature.find({ }).select('id');
    
    // Compute computedValue
    const total_candidats_inscri = len(total_candidats); // For example, doubling the value from Schema 1

    // Update Schema 2 document with computed value
    await sessions.findOneAndUpdate({ total_candidats_inscri });
}