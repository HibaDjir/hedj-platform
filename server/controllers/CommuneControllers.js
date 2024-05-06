const { default: mongoose } = require('mongoose')
const commune = require('../models/Commune')
const Candidature = require('../models/Candidature')


const getCandidatsCountForCommune = async (commune) => {
    try {
      const candidatsCount = await Candidature.countDocuments({ commune: commune.code });
      return candidatsCount;
    } catch (error) {
      console.error('Error fetching candidats count for communes:', error);
      throw new Error('Error fetching candidats count for communes');
    }
  };

const getAllCommune = async (req, res) => {
    try {
        const Communes = await commune.find({}).sort({createAt: -1})
        const communeData = await Promise.all(Communes.map(async(commune)=>{
            const candidatsCount =await getCandidatsCountForCommune(commune)
            return {...commune.toObject(), candidatsCount}
        }))
        res.status(200).json(communeData)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }

}

const getCommuneById = async(req, res)=>{
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Erreur de parametre"})
        }
    
        const Lacommune = await commune.findById(id)
        if(!Lacommune){
            return res.status(404).json({error: "Commune with given Id does not exist"})
        }
        const candidatsCount = await getCandidatsCountForCommune(Lacommune)
        const communeData = {...Lacommune.toObject(), candidatsCount}

        res.status(200).json(communeData)
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }

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
    try {
        // Define the criteria for identifying the documents to update
        const { code, nb_places } = req.body;
        const criteria = { 'code': code };

        // Define the update operation
        const update = {
            $set: {
                // Specify the fields to update and their new values
                nb_places: nb_places
                // You can add more fields as needed
            }
        };

        // Update the documents that match the criteria
        const result = await commune.updateOne(criteria, update, {upsert: true});

        return res.status(200).json({ message: `${result.nModified} records updated successfully` });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const ajouterCotatCommune = async(req, res) =>{
    try {
                const { nomCommune, nb_places } = req.body;
                if (typeof nb_places !== 'number') {
                    return res.status(400).json("Invalid nb_places: Must be a number");
                }
                const Lacommune = await commune.findOneAndUpdate(
                    { ar_name: nomCommune},
                    { $set: { nb_places } }, 
                    { new: true } // Return the updated document
                );
        
                if (!Lacommune) {
                    return res.status(404).json("Commune not found"); // Handle missing commune
                }
                res.status(200).json(Lacommune)
        
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}

const getNbCandidats = async(req, res)=>{

}

module.exports = {
    createCommune,
    getAllCommune,
    getCommune,
    getCodeCommune,
    deleteCommune,
    updateCommune,
    ajouterCotatCommune, 
    getCommuneById
}