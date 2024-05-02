const Pelerin=require('../models/pelerin')
const Wilaya=require('../models/wilaya')
const Commune=require('../models/Commune')



 exports.getAllPelerins=async(req,res)=>{
    try{
       const pelerins = await Pelerin.find().populate({ path: "Candidature", select: ["nom", "prenom", "genre", "telephone", "email"], options: { strictPopulate: false } });
       console.log('pelerin in pelerin controller ',pelerins)
        if(!pelerins){
            res.status(400).json({message:'the table is empty'})
        }
        else{
            res.status(200).json(pelerins)
        }
    }catch(err){
        res.status(401).json(err.message)
    }
 }

 exports.deleteAllPelerin=async(req,res)=>{
    try {
        // Delete all documents from the Pelerin collection
        const result = await Pelerin.deleteMany();

        // Check if any documents were deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No documents found to delete.' });
        }

    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }

 }
 

 exports.getPelerinByWilaya = async(req, res) =>{
    try{
    const {name} = req.params 
    const wilaya = await Wilaya.findOne({name })
    const pelerinDuCode = await Pelerin.find().populate({path: "Candidature", select: ["wilaya", "nom","prenom"], options: { strictPopulate: false }})
    const pelerin = pelerinDuCode.filter(pelerin => pelerin.Candidature.wilaya === wilaya.code)
    console.log("pelerinDuCodeeeeee", pelerinDuCode)

    console.log("les pelerins de la wilaya", pelerin)
    res.status(200).json(pelerin);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }

 }

 exports.getPelerinByCommune = async(req, res)=>{
    try {
        const commune = await Commune.findOne({ar_name: req.params.name})
        const pelerinDuCode = await Pelerin.find().populate({path: "Candidature", selec:["wilaya", "nom","prenom", "Comune"], options: { strictPopulate: false} })
        const pelerin = pelerinDuCode.filter(pelerin => pelerin.Candidature.commune === commune.code)
        console.log("les pelerins de la commune sont", pelerin)
        res.status(200).json(pelerin);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
 }