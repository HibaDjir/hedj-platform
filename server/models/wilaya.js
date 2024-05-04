const mongoose = require("mongoose");

const schema = mongoose.Schema

const WilayaSchema = new schema({
    code: {
        type: Number,
        require: true,
    },
    ar_name:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    nb_places:{
        type: String,
    }
}, { timeseries: true})

module.exports = mongoose.model('Wilaya', WilayaSchema)