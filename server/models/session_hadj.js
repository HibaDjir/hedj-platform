const { date } = require('joi');
const mongoose = require('mongoose');

const session_hadjSchema = new mongoose.Schema({
    year: {
        type: date,
        required: true
    },
    
    state: {
        type: String,
        enum: ['candidature', 'tirage', 'medecin', 'payement','hadj'],
        required: true
    }
});

const Session_Hadj = mongoose.model('Session_Hadj', session_hadjSchema);

module.exports = Session_Hadj;