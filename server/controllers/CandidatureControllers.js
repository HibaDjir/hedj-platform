const { default: mongoose } = require('mongoose')
const candidature = require('../models/Candidature')
const sesstion = require('../models/Sessions')

const getAllCandidature = async (req, res) => {
    const userId = req.user;
    console.log(userId);
    const candidats = await candidature.find({}).sort({createAt: -1})
    res.status(200).json(candidats)
}

const getCandidature = async (req, res) => {
    //const { code } = req.params
    const genre = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;

    const query = { 
        [genre]: fieldValue
    };

    const candidats = await candidature.find(query)
    if(!candidats){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(candidats)
}

const getCandidatureUser = async (req, res) => {
    //const { code } = req.params
    const id_user = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;

    const query = { 
        [id_user]: fieldValue
    };

    const candidats = await candidature.find(query)
    if(!candidats){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(candidats)
}

const getCandidatureUserMale = async (req, res) => {
    //const { code } = req.params
    const id_user = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;

    const query = { 
        [id_user]: fieldValue,
        ['genre']: 'ذكر'
    };

    const candidats = await candidature.find(query)
    if(!candidats){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(candidats)
}

const getFirstCandidature = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const candidat = await candidature.findById(id)
    if(!candidat){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(candidat)
}

const createCandidature = async (req, res) => {
    const formData = req.body;
    try {
        const candidat = await candidature.create(formData)
        //await sesstion.total_candidats_inscriAndUpdate() 
        res.status(200).json(candidat)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCandidature = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const candidat = await candidature.findOneAndDelete({_id: id})
    if(!candidat){
        return res.status(404).json({error: "vide"})
    }
    //await sesstion.total_candidats_inscriAndUpdate() 
    res.status(200).json(candidat)
}

const updateCandidature = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const candidat = await candidature.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!candidat){
        return res.status(404).json({error: "vide"})
    }
    //await sesstion.total_candidats_inscriAndUpdate() 
    res.status(200).json(candidat)
}

module.exports = {
    createCandidature,
    getAllCandidature,
    getFirstCandidature,
    getCandidature,
    getCandidatureUser,
    getCandidatureUserMale,
    deleteCandidature,
    updateCandidature,
}