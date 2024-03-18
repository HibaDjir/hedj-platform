const mongoose = require('mongoose');

const candidatSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    placeOfBirth: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    socialStatus: {
        type: String,
        enum: ['celibat', 'married', 'divorced', 'veuf'],
        required: true
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    passportNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    wilaya: {
        type: String,
        required: true
    },
    daira: {
        type: String,
        required: true
    },
    adressepostale: {
        type: String,
        required: true
    },
    blood: {
        type: String,
        required: true
    },
    healthnumber: {
        type: String,
        required: true
    },
    healthStatus: {
        type: String,
        enum: ['sucre', 'coeur', 'sang', 'imunity','rabw','none'],
        required: true
    },
    
    session_hadj: 
    {type: mongoose.Schema.Types.ObjectId,
    ref: 'Session_Hadj', // Reference to the User model
    required: true
    },



    // Other candidate fields
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    mahram: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidat', // Reference to another candidate (for MAHRAM)
    }


});

const Candidat = mongoose.model('Candidat', candidatSchema);

module.exports = Candidat;
