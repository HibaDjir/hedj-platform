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
    state:{
        type: String,
        enum:["En cours", "Candidature", "Tirage", "El hadj", "Cloturer"],
        default:"En cours"
    }
})

module.exports = mongoose.model('sessions', SessionSchema)