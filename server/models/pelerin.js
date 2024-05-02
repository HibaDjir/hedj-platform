const mongoose = require('mongoose');
const schema = mongoose.Schema

const PelerinSchema = new schema({
    Candidature:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Candidature',
},

  
})

module.exports = mongoose.model('Pelerin', PelerinSchema)