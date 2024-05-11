const { default: mongoose } = require('mongoose')
const session = require('../models/Sessions')

const getAllSession = async (req, res) => {
    const sessions = await session.find({}).sort({createAt: -1})
    res.status(200).json(sessions)
}

const createSession = async (req, res) => {
    const {annee, nbr_candidats} = req.body
    try {
        const Session = await session.create({annee, nbr_candidats})
        res.status(200).json(Session)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getSession = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const Session = await session.findById(id)
    if(!Session){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(Session)
}

const getAnneeSession = async (req, res) => {
    //const { code } = req.params
    const annee = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;
    
    const Session = await session.find({[annee]: fieldValue})
    if(!Session){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(Session)
}

const getStateSession = async (req, res) => {
    //const { code } = req.params
    const state = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;
    
    const Session = await session.findOne({[state]: fieldValue})
    if(!Session){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(Session)
}

const deleteSession = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const Session = await session.findOneAndDelete({_id: id})
    if(!Session){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(Session)
}

const updateSession = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const Session = await session.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!Session){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(Session)
}

module.exports = {
    createSession,
    getAllSession,
    getSession, 
    getAnneeSession,
    getStateSession,
    deleteSession,
    updateSession,
}