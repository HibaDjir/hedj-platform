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
    }
}, { timeseries: true})

module.exports = mongoose.model('Wilaya', WilayaSchema)