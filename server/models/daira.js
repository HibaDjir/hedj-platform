// daira.js
const mongoose = require('mongoose');

const dairaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    wilaya: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wilaya', // Reference to the Wilaya model
        required: true
    }
});

const Daira = mongoose.model('Daira', dairaSchema);

module.exports = Daira;
