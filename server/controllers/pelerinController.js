const Pelerin=require('../models/pelerin')
const Wilaya=require('../models/wilaya')
const Commune=require('../models/Commune')


exports.deleteAllPelerinsFromDb = async (req, res)=>{
    try {
        const deletedPelerins = await Pelerin.deleteMany()
        res.status(200).json({ message: 'All pelerins deleted successfully' });
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
}


 exports.getAllPelerins=async(req,res)=>{
    try{
    const pelerins = await Pelerin.find().populate({ path: "Candidature", select: ["nom", "prenom", "genre", "telephone", "email","date_naissance","lieu_naissance","nationalite","civilite","wilaya","commune",'address',"groupage",'nss',"maladie_cronique","status"], options: { strictPopulate: false } });
    
   
       //console.log('pelerin in pelerin controller ',pelerins)
       const simplePelerin = await Promise.all(
        pelerins.filter(pelerin => pelerin && pelerin.Candidature && pelerin.Candidature.status === 'is_elected')
        .map(async (pelerin) => {
        try {
            const lawilaya = await Wilaya.findOne({ code: pelerin.Candidature.wilaya });
            const lacommune = await Commune.findOne({code: pelerin.Candidature.commune})
            
      
     
            return {                                                                                        
                _id: pelerin.Candidature._id,
                nom: pelerin.Candidature.nom,
                prenom: pelerin.Candidature.prenom,
                email: pelerin.Candidature.email,
                NumeroTelephone: pelerin.Candidature.telephone,
                etat: pelerin.Candidature.status,
                wilayaName: lawilaya ? lawilaya.name : null, // String: wilaya name or null
                Candidat_commune: lacommune.ar_name,
                Candidat_sexe: pelerin.Candidature.genre,
                Numero_ass: pelerin.Candidature.nss,
                Num_passport: pelerin.Candidature.num_passeport,
                Etat_civil: pelerin.Candidature.civilite,
                Nat: pelerin.Candidature.nationalite,
                Groupe_sang: pelerin.Candidature.groupage,
                Malad_chro: pelerin.Candidature.maladie_cronique,
                Adresse_com: pelerin.Candidature.address

            };
        } catch (error) {
            console.error('Error fetching wilaya for candidat:', candidat, error);
          
        }
    }));

       res.status(200).json(simplePelerin)
     
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
    const pelerinDuCode = await Pelerin.find().populate({path: "Candidature", select: ["nom", "prenom", "genre", "telephone", "email","date_naissance","lieu_naissance","nationalite","civilite","wilaya","commune",'address',"groupage",'nss',"maladie_cronique","status"], options: { strictPopulate: false }})
    const filteredPelerins = pelerinDuCode
    .filter(pelerin => {
      return pelerin.Candidature && // Check if Candidature exists
        pelerin.Candidature.wilaya === wilaya.code && // Check wilaya code
        pelerin.Candidature.status === 'is_elected';

    })
    .map(pelerin => {
      try{ 
         const lacommune =  Commune.findOne({code: pelerin.Candidature.commune})
      return {
        _id: pelerin.Candidature._id,
        nom: pelerin.Candidature.nom,
        prenom: pelerin.Candidature.prenom,
        email: pelerin.Candidature.email,
        NumeroTelephone: pelerin.Candidature.telephone,
        etat: pelerin.Candidature.status,
        wilayaName: wilaya ? wilaya.name : null, // Corrected variable name
        Candidat_sexe: pelerin.Candidature.genre,
        Candidat_commune: lacommune.ar_name,
        Numero_ass: pelerin.Candidature.nss,
        Num_passport: pelerin.Candidature.num_passeport, // Assuming this property exists
        Etat_civil: pelerin.Candidature.civilite,
        Nat: pelerin.Candidature.nationalite,
        Groupe_sang: pelerin.Candidature.groupage,
        Malad_chro: pelerin.Candidature.maladie_cronique,
        Adresse_com: pelerin.Candidature.address
      };}catch(err){
        console.log(err.message)
      }
    });
    
    //console.log("pelerinDuCodeeeeee", pelerinDuCode)

    //console.log("les pelerins de la wilaya", pelerin)
    res.status(200).json(filteredPelerins );
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }

 }

 exports.getPelerinByCommune = async(req, res)=>{
    try {
        const commune = await Commune.findOne({ar_name: req.params.name})
        const pelerinDuCode = await Pelerin.find().populate({path: "Candidature", selec:["nom", "prenom", "genre", "telephone", "email","date_naissance","lieu_naissance","nationalite","civilite","wilaya","commune",'address',"groupage",'nss',"maladie_cronique","status"], options: { strictPopulate: false} })
        const filteredPelerins = pelerinDuCode
        .filter(pelerin => {
          return pelerin.Candidature && // Check if Candidature exists
            pelerin.Candidature.commune === commune.code && // Check wilaya code
            pelerin.Candidature.status === 'is_elected';
    
        })
        .map(pelerin => {
          return {
            _id: pelerin.Candidature._id,
            nom: pelerin.Candidature.nom,
            prenom: pelerin.Candidature.prenom,
            email: pelerin.Candidature.email,
            NumeroTelephone: pelerin.Candidature.telephone,
            etat: pelerin.Candidature.status,
            Candidat_commune: commune.ar_name,
            Candidat_sexe: pelerin.Candidature.genre,
            Numero_ass: pelerin.Candidature.nss,
            Num_passport: pelerin.Candidature.num_passeport, // Assuming this property exists
            Etat_civil: pelerin.Candidature.civilite,
            Nat: pelerin.Candidature.nationalite,
            Groupe_sang: pelerin.Candidature.groupage,
            Malad_chro: pelerin.Candidature.maladie_cronique,
            Adresse_com: pelerin.Candidature.address
          };
        });
        
        //console.log("les pelerins de la commune sont", pelerin)
        res.status(200).json(filteredPelerins);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
 }


 exports.getAllPelerinsAtt=async(req,res)=>{
    try{
    const pelerins = await Pelerin.find().populate({ path: "Candidature", select: ["nom", "prenom", "genre", "telephone", "email","date_naissance","lieu_naissance","nationalite","civilite","wilaya","commune",'address',"groupage",'nss',"maladie_cronique","status"], options: { strictPopulate: false } });
    
   
       console.log('pelerin in pelerin controller ',pelerins)
       const simplePelerin = await Promise.all(
        pelerins.filter(pelerin => pelerin && pelerin.Candidature && pelerin.Candidature.status === 'is_enAttent')
        .map(async (pelerin) => {
        try {
            console.log("LEPELERIN", pelerin)
            const lawilaya = await Wilaya.findOne({ code: pelerin.Candidature.wilaya });
            const lacommune = await Commune.findOne({code: pelerin.Candidature.commune})
            
      
     
            return {                                                                                        
                _id: pelerin.Candidature._id,
                nom: pelerin.Candidature.nom,
                prenom: pelerin.Candidature.prenom,
                email: pelerin.Candidature.email,
                NumeroTelephone: pelerin.Candidature.telephone,
                etat: pelerin.Candidature.status,
                wilayaName: lawilaya ? lawilaya.name : null, // String: wilaya name or null
                Candidat_commune: lacommune.ar_name,
                Candidat_sexe: pelerin.Candidature.genre,
                Numero_ass: pelerin.Candidature.nss,
                Num_passport: pelerin.Candidature.num_passeport,
                Etat_civil: pelerin.Candidature.civilite,
                Nat: pelerin.Candidature.nationalite,
                Groupe_sang: pelerin.Candidature.groupage,
                Malad_chro: pelerin.Candidature.maladie_cronique,
                Adresse_com: pelerin.Candidature.address

            };
        } catch (error) {
            console.error('Error fetching wilaya for candidat:', candidat, error);
          
        }
    }));

       res.status(200).json(simplePelerin)
     
    }catch(err){
        res.status(401).json(err.message)
    }
 }

 
 exports.getPelerinByWilayaAtt = async(req, res) =>{
    try{
    const {name} = req.params 
    const wilaya = await Wilaya.findOne({name })
    const pelerinDuCode = await Pelerin.find().populate({path: "Candidature", select: ["nom", "prenom", "genre", "telephone", "email","date_naissance","lieu_naissance","nationalite","civilite","wilaya","commune",'address',"groupage",'nss',"maladie_cronique","status"], options: { strictPopulate: false }})
    const filteredPelerins = pelerinDuCode
    .filter(pelerin => {
      return pelerin.Candidature && // Check if Candidature exists
        pelerin.Candidature.wilaya === wilaya.code && // Check wilaya code
        pelerin.Candidature.status === 'is_enAttent';

    })
    .map(pelerin => {
      try{ 
         const lacommune =  Commune.findOne({code: pelerin.Candidature.commune})
      return {
        _id: pelerin.Candidature._id,
        nom: pelerin.Candidature.nom,
        prenom: pelerin.Candidature.prenom,
        email: pelerin.Candidature.email,
        NumeroTelephone: pelerin.Candidature.telephone,
        etat: pelerin.Candidature.status,
        wilayaName: wilaya ? wilaya.name : null, // Corrected variable name
        Candidat_sexe: pelerin.Candidature.genre,
        Candidat_commune: lacommune.ar_name,
        Numero_ass: pelerin.Candidature.nss,
        Num_passport: pelerin.Candidature.num_passeport, // Assuming this property exists
        Etat_civil: pelerin.Candidature.civilite,
        Nat: pelerin.Candidature.nationalite,
        Groupe_sang: pelerin.Candidature.groupage,
        Malad_chro: pelerin.Candidature.maladie_cronique,
        Adresse_com: pelerin.Candidature.address
      };}catch(err){
        console.log(err.message)
      }
    });
    
    //console.log("pelerinDuCodeeeeee", pelerinDuCode)

    //console.log("les pelerins de la wilaya", pelerin)
    res.status(200).json(filteredPelerins );
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }

 }