const { default: mongoose } = require('mongoose')
const candidature = require('../models/Candidature')
const wilaya = require('../models/wilaya')
const commune = require('../models/Commune')
const sesstion = require('../models/Sessions')

const getAllCandidatureAllFields = async (req, res) => {
    try {
        const userId = req.user;
        const candidats = await candidature.find({}).sort({createAt: -1})
        res.status(200).json(candidats)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error',error: error.message});
    }

}

const getAllCandidature = async (req, res) => {
    try {
        const userId = req.user;

        // Fetch all candidats sorted by creation date (descending)
        const candidats = await candidature.find({}).sort({ createAt: -1 });

        // Map over candidats and perform asynchronous operations concurrently
        const simpleCandidats = await Promise.all(candidats.map(async (candidat) => {
            try {
                const lawilaya = await wilaya.findOne({ code: candidat.wilaya });
                const lacommune = await commune.findOne({code: candidat.commune})
                // Return the desired structure with wilayaName as a string
                return {                                                                                        
                    _id: candidat._id,
                    nom: candidat.nom,
                    prenom: candidat.prenom,
                    email: candidat.email,
                    NumeroTelephone: candidat.telephone,
                    etat: candidat.status,
                    wilayaName: lawilaya ? lawilaya.name : null, // String: wilaya name or null
                    commune: lacommune.name,
                    Candidat_sexe: candidat.genre,
                    Numero_ass: candidat.nss,
                    Num_passport: candidat.num_passeport,
                    Etat_civil: candidat.civilite,
                    Nat: candidat.nationalite,
                    Groupe_sang: candidat.groupage,
                    Malad_chro: candidat.maladie_cronique,     
                };
            } catch (error) {
                console.error('Error fetching wilaya for candidat:', candidat, error);
                // You can optionally return a default value or handle the error differently here
                return {
                    nbr_enregistrement: candidat.nbr_enregistrement,
                    _id: candidat._id,
                    nom: candidat.nom,
                    prenom: candidat.prenom,
                    // ... include other relevant fields from candidat
                    wilayaName: null, // String: null if wilaya not found
                };
            }
        }));

        res.status(200).json(simpleCandidats);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' ,error: error.message });
    }
};






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


const getCandByWilaya = async(req, res)=>{
        try{
        const {name} = req.params
        const lawilaya = await wilaya.findOne({name})
        const candid = await candidature.find({wilaya: lawilaya.code})


        const simpleCandidats = await Promise.all(candid.map(async (candidat) => {
            try {
                const lawilaya = await wilaya.findOne({ code: candidat.wilaya });
                const lacommune = await commune.findOne({code: candidat.commune})

                // Return the desired structure with wilayaName as a string
                return {                                                                                        
                    _id: candidat._id,
                    nom: candidat.nom,
                    prenom: candidat.prenom,
                    email: candidat.email,
                    NumeroTelephone: candidat.telephone,
                    etat: candidat.status,
                    wilayaName: lawilaya ? lawilaya.name : null, // String: wilaya name or null
                    Candidat_commune: lacommune.ar_name,
                    Candidat_sexe: candidat.genre,
                    Numero_ass: candidat.nss,
                    Num_passport: candidat.num_passeport,
                    Etat_civil: candidat.civilite,
                    Nat: candidat.nationalite,
                    Groupe_sang: candidat.groupage,
                    Malad_chro: candidat.maladie_cronique,
                    Adresse_com: candidat.address
                };
            } catch (error) {
                console.error('Error fetching wilaya for candidat:', candidat, error);
                // You can optionally return a default value or handle the error differently here
                return {
                    nbr_enregistrement: candidat.nbr_enregistrement,
                    _id: candidat._id,
                    nom: candidat.nom,
                    prenom: candidat.prenom,
                    // ... include other relevant fields from candidat
                    wilayaName: null, // String: null if wilaya not found
                };
            }
        }));

        res.status(200).json(simpleCandidats);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    
}


const deleteCands = async (req, res)=>{
    try {
        const deletedCands = await candidature.deleteMany()
        res.status(200).json({ message: 'All cands deleted successfully' });
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
}


module.exports = {
    createCandidature,
    getAllCandidature,
    getFirstCandidature,
    getCandidature,
    getCandidatureUser,
    deleteCandidature,
    updateCandidature,
    getCandByWilaya,
    deleteCands
}