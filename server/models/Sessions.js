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
<<<<<<< HEAD
    cotat:{
        type: Number,
        require: true,
    },
=======
    inscription_d:{
        type: String,
    },
    inscription_f:{
        type: String,
    },
    tirage_d:{
        type: String,
    },
    tirage_f:{
        type: String,
    },
    consultaion_m_d:{
        type: String,
    },
    consultaion_m_f:{
        type: String,
    },
    paiement_d:{
        type: String,
    },
    paiement_f:{
        type: String,
    },
    hadj_d:{
        type: String,
    },
    hadj_f:{
        type: String,
    }
>>>>>>> 203afcec4f85ee6a5f429612566aa191079169f6
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