// wilaya.js
const mongoose = require('mongoose');

const wilayaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
});

const Wilaya = mongoose.model('Wilaya', wilayaSchema);

module.exports = Wilaya;
