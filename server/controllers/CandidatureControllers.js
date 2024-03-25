const { default: mongoose } = require('mongoose')
const candidature = require('../models/Candidature')

const getAllCandidature = async (req, res) => {
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

    const wil = await candidature.find({[genre]: fieldValue})
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const createCandidature = async (req, res) => {
    const formData = req.body;
    try {
        const candidat = await candidature.create(formData)
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

    const wil = await candidature.findOneAndDelete({_id: id})
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const updateCandidature = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const wil = await candidature.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

module.exports = {
    createCandidature,
    getAllCandidature,
    getCandidature,
    deleteCandidature,
    updateCandidature,
}