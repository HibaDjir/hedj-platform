const Medecin = require('../models/Medecin')
const Wilaya = require('../models/wilaya')
const {User, validateMedecin} = require('../models/user_profiler')
const bcrypt = require("bcrypt")
const sendEmail=require('../util/sendEmail')
const { findOneAndUpdate } = require('../models/Candidature')

//Afficher tous les medecins
exports.getAllMedecins = async(req, res)=>{
    try {
        const medecins = await Medecin.find({is_deleted: false})
        .populate('user')
        .populate('Wilaya')
        .exec();

        if(!medecins){
            return res.status(404).json("Medecins not found"); // Handle missing commune
        }
        console.log("Les medecins sont: ",medecins)
        res.status(200).json(medecins);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' }, {error: error.message});
    }
}

//Creer un medecin et l'enregistrer dans les tables user_profiler et medecin en envoyant un Email
exports.createMedecin = async(req, res)=>{
    try {
        //validate informations
        const {error} = validateMedecin(req.body);
        if(error){
            return res.status(400).send({ message: error.details[0].message });
        }
        //check email
        const existingUser = await User.findOne({email: req.body.email});
        if(existingUser){
            return res.status(409).send({ message: "Medecin with given email already exists!" });
        }
        //hashing the password
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        //set the role to medecin
        req.body.Role = "medecin"
        //save the medecin in the user_profiler database
        const user = await new User ({...req.body, password: hashPassword}).save();
        //check if the input wilaya exists
        const wilaya = await Wilaya.findOne({name: req.body.wilaya});
        if(!wilaya){
            return res.status(409).send({ message: "Given Wilaya does not exist" });
        }
        //create new instance of medecin
        const medecin = new Medecin({
            Wilaya: wilaya._id,
            user: user._id,
            NumeroTelephone:req.body.NumeroTelephone,
            etat:req.body.etat,
            adr_pro: req.body.adr_pro
        });
        //saving the medecin
        const savedMedecin = await medecin.save();
        //envoie d'une reponse json contenant doc medecin
        const populatedMedecin = await Medecin.findById(savedMedecin._id)
        .populate('user')
        .populate('Wilaya')
        .exec();

        console.log(populatedMedecin)
        res.status(201).json(populatedMedecin)

        //sending a mail to medecin
        const url=`http://localhost:3001/login`	
        await sendEmail({
             email: user.email,
             subject:'Welcome to Labayka!',
             message:
             `Hi Doctor ${user.lastName}!\n\n
             Here you can find the Email-address and Password to login to our WebSite.\n
             **Your Login Credentials:**\n\n
             Email :${user.email}\n\n
             Password:${req.body.password}(Please note: This is a temporary password)\n
             **Important Security Reminder:**\n
             For your security, we strongly recommend setting a new password right away. Click the link below to easily login:\n
             ${url}`
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error', error: error.message });    }
}


//Afficher un medecin avec son ID passée comme parametre
exports.getMedecinById = async (req, res) =>{
    try {
        const medecinId = req.params.id
        const medecin = await Medecin.findOne({_id: medecinId,  is_deleted: false})
        if(!medecin){
            return res.status(409).send({ message: "Medecin with given ID does not exist" }); 
        }
        const populatedMedecin = await Medecin.findById(medecin._id)
        .populate('user')
        .populate('Wilaya')
         .exec();
         console.log(populatedMedecin)

         res.status(201).json(populatedMedecin)
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
}


//supprimer tous les medecins SOYER PRUDENT LORS DE SON UTILISATION
exports.deleteAllMedecinsFromDb = async (req, res)=>{
    try {
        const deletedUserMedecin = await User.deleteMany({Role: "medecin"})
        const deletedMedecins = await Medecin.deleteMany();

        console.log("Delete de la table users:", deletedUserMedecin)
        console.log("Delete de la table medecins:",deletedMedecins)

        res.status(200).json({ message: 'All medecins deleted successfully' });
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
}


//supprimer Un medecin selon l'Id passée comme parametre SOYER PRUDENT LORS DE SON UTILISATION
exports.deleteMedecinByIdFromDb = async (req, res) => {
    const medecinId  = req.params.id
    try {
        // Find medecin by id and get the linked user's id
        const medecin = await Medecin.findById(medecinId);
        if (!medecin) {
            return res.status(404).json({ message: 'Medecin not found' });
        }

        const userId = medecin.user; 
        // Delete medecin from User collection
        const deletedUserMedecin = await User.findByIdAndDelete({ _id: userId });
        // Delete medecin from Medecin collection
        const deletedMedecin = await Medecin.findByIdAndDelete(medecinId);
 
        console.log("Deleted medecin from Medecin collection:", deletedMedecin);
        console.log("Deleted medecin from User collection:", deletedUserMedecin);

        res.status(200).json({ message: 'Medecin and associated user deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}



//supprimer les medecins logiquement avec l'attribut is deleted
exports.deleteAllMedecins = async (req, res)=>{
    try {
        const deletedMedecins = await Medecin.updateMany({},  {$set: {is_deleted: true}});

        console.log("Delete de la table medecins LOGICALLY:",deletedMedecins)

        res.status(200).json({ message: 'All medecins deleted successfully' });
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
}


//retrieve les medecins logiquement 
exports.retrieveAllMedecins = async (req, res)=>{
    try {
        const retrievedMedecins = await Medecin.updateMany({},  {$set: {is_deleted: false}});

        console.log("retrieve de la table medecins LOGICALLY:",retrievedMedecins)


        res.status(200).json({ message: 'All medecins retrieved successfully' });
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
}


//deleting a medecin by id logiquement, setting is_deleted to true
exports.deleteMedecinById = async (req, res) => {
    const medecinId  = req.params.id
    try {
        // Find medecin by id and get the linked user's id
        const medecin = await Medecin.findById(medecinId);
        if (!medecin) {
            return res.status(404).json({ message: 'Medecin not found' });
        }

        // Delete medecin from Medecin collection
        const deletedMedecin = await Medecin.findOneAndUpdate({_id: medecinId}, {$set: {is_deleted: true}});
 
        console.log("Deleted medecin from Medecin collection:", deletedMedecin);

        res.status(200).json({ message: 'Medecin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}


//retreive medecin by id 
exports.retrieveMedecinById = async (req, res) => {
    const medecinId  = req.params.id
    try {
        // Find medecin by id and get the linked user's id
        const medecin = await Medecin.findById(medecinId);
        if (!medecin) {
            return res.status(404).json({ message: 'Medecin not found' });
        }

        // Delete medecin from Medecin collection
        const retrievedMedecin = await Medecin.findOneAndUpdate({_id: medecinId}, {$set: {is_deleted: false}});
 
        console.log("Retrieved medecin from Medecin collection:", retrievedMedecin);

        res.status(200).json({ message: 'Medecin retrieved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}



exports.updateMedecin = async(req, res)=>{
    try {
        console.log(req.body.firstName)
        const idMedecin = req.params.id
        const leMedecin = await Medecin.findById({_id:idMedecin })

        if(req.body.NumeroTelephone || req.body.etat ||req.body.adr_pro){
        const updatedMedecinChamps = await Medecin.findByIdAndUpdate(
            idMedecin,
            {
                NumeroTelephone: req.body.NumeroTelephone || leMedecin.NumeroTelephone,
                etat: req.body.etat || leMedecin.etat,
                adr_pro: req.body.adr_pro || leMedecin.adr_pro
            }
        ).populate('user')
        .populate('Wilaya')
        .exec();
        if(!updatedMedecinChamps){
            return res.status(404).json({ message: 'Medecin with given ID not found or can\t be updated.' });
        }
    }

        if(req.body.wilaya){
            const lawilaya = await Wilaya.findOne({name: req.body.wilaya})
            if (!lawilaya) {
                return res.status(404).json({ message: 'Wilaya not found.' });
            }
            const updatedWilayaChamp = await Medecin.findByIdAndUpdate(idMedecin, {Wilaya: lawilaya._id})
            if(!updatedWilayaChamp){
                return res.status(404).json({ message: 'Wilaya can\'t be updated for Medecin with given ID  ' });
            }
        }


        if(req.body.firstName || req.body.lastName  ){
            const updatedUser = await User.findByIdAndUpdate(
                leMedecin.user,
                {
                    firstName: req.body.firstName || leMedecin.user.firstName,
                    lastName: req.body.lastName || leMedecin.user.lastName
                }
            )
            if(!updatedUser){
                return res.status(404).json({ message: 'Medecin with given ID Can\'t be updated in Users' });
            }
        }

        if(req.body.email){
            //check if email already exists
                const emailUser = await User.findOne({email: req.body.email})
                if(emailUser){
                    return res.status(409).json({ message: "User with given email already Exist!" });
                }
                const updatedUserEmail = await User.findByIdAndUpdate(
                    leMedecin.user,
                    {
                        email: req.body.email || leMedecin.user.email
                    }
                )
                if(!updatedUserEmail){
                    return res.status(404).json({ message: 'can\'t update Email of Medecin with given' });
                }

        }


        res.status(200).json({ message: 'Medecin with given ID updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

// exports.updateMedecin = async (req, res) => {
//     try {
//         const idMedecin = req.params.id;
//         const leMedecin = await Medecin.findById(idMedecin);

//         // Update Medecin fields
//         if (req.body.NumeroTelephone || req.body.etat || req.body.adr_pro) {
//             const updatedMedecinChamps = await Medecin.findByIdAndUpdate(
//                 idMedecin,
//                 {
//                     NumeroTelephone: req.body.NumeroTelephone || leMedecin.NumeroTelephone,
//                     etat: req.body.etat || leMedecin.etat,
//                     adr_pro: req.body.adr_pro || leMedecin.adr_pro
//                 },
//                 { new: true }
//             );
//             if (!updatedMedecinChamps) {
//                 return res.status(404).json({ message: 'Medecin with given ID not found or can\'t be updated.' });
//             }
//         }

//         // Update Wilaya field
//         if (req.body.wilaya) {
//             const lawilaya = await Wilaya.findOne({ name: req.body.wilaya });
//             if (!lawilaya) {
//                 return res.status(404).json({ message: 'Wilaya not found.' });
//             }
//             const updatedWilayaChamp = await Medecin.findByIdAndUpdate(idMedecin, { Wilaya: lawilaya._id }, { new: true });
//             if (!updatedWilayaChamp) {
//                 return res.status(404).json({ message: 'Wilaya can\'t be updated for Medecin with given ID.' });
//             }
//         }

//         // Update associated User fields
//         if (req.body.firstName || req.body.lastName || req.body.email) {
//             const updatedUser = await User.findByIdAndUpdate(
//                 leMedecin.user,
//                 {
//                     firstName: req.body.firstName || leMedecin.user.firstName,
//                     lastName: req.body.lastName || leMedecin.user.lastName,
//                     email: req.body.email || leMedecin.user.email
//                 },
//                 { new: true }
//             );
//             if (!updatedUser) {
//                 return res.status(404).json({ message: 'Medecin with given ID can\'t be updated in Users.' });
//             }
//         }

//         res.status(200).json({ message: 'Medecin with given ID updated successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// };
