
const Wilaya=require('../models/wilaya')
const {User, validateAddSousAdmin}=require('../models/user_profiler')
const sousAdmin = require('../models/sousAdmin')
const bcrypt = require("bcrypt");
const sendEmail=require('../util/sendEmail')

exports.createSousAdmin=async(req,res)=>{
    try{
        const { error } =  validateAddSousAdmin(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.json({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
        
        // Set the default role to "sousAdmin"
        req.body.Role="sousAdmin"

		user=await new User({ ...req.body, password: hashPassword }).save();
           // Check if the Wilaya exists
           let wilaya = await Wilaya.findOne({name:req.body.name });
           if (!wilaya) {
               throw new Error('Wilaya not found.');
           }
        
       const newSousAdmin = new sousAdmin({
        Wilaya: wilaya._id,
        user: user._id,
        NumeroTelephone:req.body.NumeroTelephone,
        etat:req.body.etat

    });
      // Save the SousAdmin
      const savedSousAdmin = await newSousAdmin.save();

    //  res.status(201).json(savedSousAdmin);
    const populatedSousAdmin = await sousAdmin.findById(savedSousAdmin._id).populate('user')
    .populate('Wilaya')
     .exec();
    res.status(201).json(populatedSousAdmin);
    

    const url=`http://localhost:3001/`	
    await sendEmail({
    email: user.email,
     subject:'Registeration IN Our Site...',
     message:`here you can find the Email-address and Password to login to our site
     \n\n Email :${user.email}\n\nPassword:${req.body.password}\n
     please Ensure to change you're password by clicking on the button of forgotPassword
     to Ensure the SECURITY of our Web Site !!!
     \n\n Here the link to access Our login page \n ${url}`
});

    }catch(err){
        
        res.status(400).json({ error: err.message });
    }
 }