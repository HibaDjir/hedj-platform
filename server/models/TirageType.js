const mongoose = require("mongoose");

const schema = mongoose.Schema

const TirageTypeSchema = new schema({
    code: {
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    minAge1:{
        type: Number,
        default:0
    },
    maxAge1:{
        type: Number,
        default:0
    },
    chance1:{
        type: Number,
        default:0
    },
    minAge2:{
        type: Number,
        default:0
    },
    maxAge2:{
        type: Number,
        default:0
    },
    chance2:{
        type: Number,
        default:0
    },
    minAge3:{
        type: Number,
        default:0
    },
    maxAge3:{
        type: Number,
        default:0
    },
    chance3:{
        type: Number,
        default:0
    }
}, { timeseries: true})

module.exports = mongoose.model('TirageType', TirageTypeSchema)