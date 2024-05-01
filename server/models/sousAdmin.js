const mongoose = require('mongoose');
const schema = mongoose.Schema

const SousAdminSchema = new schema({

    Wilaya:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wilaya"
    },
    user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"user",
    }

})

module.exports = mongoose.model('sousAdmin', SousAdminSchema)