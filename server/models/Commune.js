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
    }
}, { timeseries: true})

module.exports = mongoose.model('Commune', CommuneSchema)