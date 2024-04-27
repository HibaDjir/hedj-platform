const { default: mongoose } = require('mongoose')
const commune = require('../models/Commune')

const getAllCommune = async (req, res) => {
    const Communes = await commune.find({}).sort({createAt: -1})
    res.status(200).json(Communes)
}

const getCommune = async (req, res) => {
    const code = req.query.fieldName; 
    const minValue = parseInt(req.query.minValue);
    const maxValue = parseInt(req.query.maxValue);

    const query = {
        [code]: {
            $gte: minValue,
            $lt: maxValue
        }
    };

    const wil = await commune.find(query)
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const getCodeCommune = async (req, res) => {
    //const { code } = req.params
    const code = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;
    
    const wil = await commune.find({[code]: fieldValue})
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const createCommune = async (req, res) => {
    const jsonDataList = req.body;
    try {
        const wil = await commune.insertMany(jsonDataList)
        res.status(200).json(wil)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCommune = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const wil = await commune.findOneAndDelete({_id: id})
    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

const updateCommune = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Erreur de parametre"})
    }

    const wil = await commune.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!wil){
        return res.status(404).json({error: "vide"})
    }
    res.status(200).json(wil)
}

module.exports = {
    createCommune,
    getAllCommune,
    getCommune,
    getCodeCommune,
    deleteCommune,
    updateCommune,
}