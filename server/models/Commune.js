const mongoose = require("mongoose");

const schema = mongoose.Schema

const CommuneSchema = new schema({
    code: {
        type: Number,
        require: true,
    },
    ar_name:{
        type: String,
        require: true,
    },
    fr_name: {
        type: String,
        required: true
    }
}, { timeseries: true})

module.exports = mongoose.model('Commune', CommuneSchema)