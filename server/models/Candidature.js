const mongoose = require("mongoose");

const schema = mongoose.Schema

const CandidatureSchema = new schema({
    nom:{
        type: String,
        require: true,
    },
    prenom:{
        type: String,
        require: true,
    },
    date_naissance:{
        type: Date,
        require: true,
    },
    lieu_naissance:{
        type: String,
        require: true,
    },
    nationalite:{
        type: String,
        require: true,
    },
    civilite:{
        type: String,
        require: true,
    },
    genre:{
        type: String,
        require: true,
    },
    num_passeport:{
        type: String,
        require: true,
    },
    telephone:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    wilaya:{
        type: Number,
        require: true,
    },
    commune:{
        type: Number,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    groupage:{
        type: String,
        require: true,
    },
    nss:{
        type: String,
        require: true,
    },
    maladie_cronique:{
        type: String,
        require: true,
    },
    id_mahrem:{
        type: String,
    },
    id_session:{
        type: String,
        require: true,
    },
    status:{
        type:String,
        enum:["is_elected","is_enAttent"]
    
    },
    id_user:{
        type: String,
        require: true,
    },
    nbr_enregistrement:{
        type: Number,
        require: true,
        default:0
    },
    is_elected:{
        type: Boolean,
        default:false
    },
    is_attente:{
        type: Boolean,
        default:false
    },
    file_medical: {
      type: String
    },
    num_compte: {
      type: String
    },
    cle_compte: {
      type: String
    },
    num_rib: {
      type: String
    },
    propreitaire_compte: {
      type: String
    },
    date_operation:{
        type: Date
    },
    address_op: {
      type: String
    },
    file_paie_ver: {
      type: String
    },
    propreitaire_carte: {
      type: String
    },
    num_carte: {
      type: String
    },
    code_carte: {
      type: String
    },
    date_operation:{
        type: Date
    }

},{ timeseries: true})

module.exports = mongoose.model('Candidature', CandidatureSchema)