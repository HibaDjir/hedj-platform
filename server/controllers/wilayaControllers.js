const { default: mongoose } = require('mongoose')
const wilaya = require('../models/wilaya')
const Candidature = require('../models/Candidature')

const getCandidatsCountForWilaya = async (wilaya) => {
    try {
      const candidatsCount = await Candidature.countDocuments({ wilaya: wilaya.code });
      return candidatsCount;
    } catch (error) {
      console.error('Error fetching candidats count for wilaya:', error);
      throw new Error('Error fetching candidats count for wilaya');
    }
  };

const getAllWilaya = async (req, res) => {
    try {
        const wilayas = await wilaya.find({}).sort({createAt: -1})
        const wilayaData = await Promise.all(wilayas.map(async(wilaya)=>{
            const candidatsCount =await getCandidatsCountForWilaya(wilaya)
            return {...wilaya.toObject(), candidatsCount}
        }))
        res.status(200).json(wilayaData)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }

}

const getWilaya = async (req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Erreur de parametre"})
        }
    
        const wil = await wilaya.findById(id)
        if(!wil){
            return res.status(404).json({error: "vide"})
        }
        const candidatsCount = await getCandidatsCountForWilaya(wil)
        const wilayaData = {...wil.toObject(), candidatsCount}

        res.status(200).json(wilayaData)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }


}

const getCodeWilaya = async (req, res) => {
    //const { code } = req.params
    const code = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;
    
    const wil = await wilaya.find({[code]: fieldValue})
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

const ajouterCotatWilaya = async(req, res) =>{
    try {
                const { nom_wilaya, nb_places } = req.body;
                if (typeof nb_places !== 'number') {
                    return res.status(400).json("Invalid nb_places: Must be a number");
                }
                const lawilaya = await wilaya.findOneAndUpdate(
                    { name: nom_wilaya },
                    { $set: { nb_places } }, 
                    { new: true } // Return the updated document
                );
        
                if (!lawilaya) {
                    return res.status(404).json("Wilaya not found"); // Handle missing commune
                }
                res.status(200).json(lawilaya)
        
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}


module.exports = {
    createWilaya,
    getAllWilaya,
    getWilaya,
    getCodeWilaya,
    deleteWilaya,
    updateWilaya,
    ajouterCotatWilaya
}