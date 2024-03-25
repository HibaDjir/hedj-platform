const { default: mongoose } = require('mongoose')
const wilaya = require('../models/wilaya')

const getAllWilaya = async (req, res) => {
    const wilayas = await wilaya.find({}).sort({createAt: -1})
    res.status(200).json(wilayas)
}

const getWilaya = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const wil = await wilaya.findById(id)
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const createWilaya = async (req, res) => {
    const {code, ar_name, name} = req.body
    try {
        const wil = await wilaya.create({code, ar_name, name})
        res.status(200).json(wil)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteWilaya = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const wil = await wilaya.findOneAndDelete({_id: id})
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const updateWilaya = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const wil = await wilaya.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

module.exports = {
    createWilaya,
    getAllWilaya,
    getWilaya,
    deleteWilaya,
    updateWilaya,
}