const Medecin = require('../models/Medecin')
const Wilaya = require('../models/wilaya')
const {User, validateMedecin} = require('../models/user_profiler')
const bcrypt = require("bcrypt")
const sendEmail=require('../util/sendEmail')


exports.getAllMedecins = async(req, res)=>{
    try {
        const medecins = await Medecin.find()
        console.log("Les medecins sont: ",medecins)
        if(!medecins){
            return res.status(404).json("Medecins not found"); // Handle missing commune
        }
        res.status(200).json(medecins);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' }, {error});
    }
}

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
        const populatedMedecin = await Medecin.findById(savedMedecin._id).populate('user')
        .populate('Wilaya')
         .exec();

        console.log(populatedMedecin)
        res.status(201).json(populatedMedecin)

        //sending a mail to medecin
        const url=`http://localhost:3001/login`	
        await sendEmail({
             email: user.email,
             subject:'Welcome to Labayka!',
             message:`
             Hi Doctor ${user.lastName}!\n\n
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