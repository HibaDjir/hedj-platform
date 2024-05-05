
const Wilaya=require('../models/wilaya')
const {User, validateAddSousAdmin}=require('../models/user_profiler')
const sousAdmin = require('../models/sousAdmin')
const bcrypt = require("bcrypt");
const sendEmail=require('../util/sendEmail')

// creating SousAdmin 

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
        console.log(hashPassword)
        
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

  // get All Admin 
exports.getAllSousAdmin =async(req,res)=>{

    try{
        const sousAdmins = await sousAdmin.find({is_deleted:false}).populate({ path: "user", select: ["firstName", "lastName", "email"], options: { strictPopulate: false } }).
        populate({path:'Wilaya',select:"name", options:{ strictPopulate: false }});
       

        if(!sousAdmins){
            res.status(400).json({message:'the table is empty'})
        }
        else{
            res.status(200).json(sousAdmins)
        }

    }catch(err){
        res.status(401).json(err.message)
    }
}   

//get SousAdmin By id 

exports.getsousAdminById=async(req,res)=>{
    try{
        let id=req.params.id
        let sousadmin=await sousAdmin.findOne({_id:id})
        if(!sousadmin){
            res.status(409).send({message:'sousAdmin with given id doesnt exist'})
        }
        const populateSousAdmin = await sousAdmin.findById(sousadmin._id)
        .populate('user')
        .populate('Wilaya')
         .exec();
         console.log(populateSousAdmin)

         res.status(201).json(populateSousAdmin)

    }catch(err){
        res.status(500).json({message: 'Internal server error', error: err.message })
    }
}

//delete sousAdmin by setting is_deleted:true

exports.deleteSousAdmin=async(req,res)=>{
    let id=req.params.id
    try{
        let sousadmin=await sousAdmin.findById(id)
        if(!sousadmin){
            res.status(409).send({message:'sousAdmin with given id doesnt exist'})
        }
        const deletedSousAdmin = await sousAdmin.findOneAndUpdate({_id: id}, {$set: {is_deleted: true}});

        res.status(200).json({ message: 'Medecin deleted successfully' });


    }catch(err){

        res.status(500).json({ message: 'Internal server error', error: err.message });
    }

}





//update SousAdmin

exports.updateSousAdmin=async(req,res)=>{
    try{

        const { id } = req.params;
        
        const updates = req.body;
           // Find the sousAdmin by ID
           const existingSousAdmin = await sousAdmin.findById(id);
           if (!existingSousAdmin) {
               return res.status(404).json({ message: "SousAdmin not found" });
           }

           if (updates.firstName || updates.lastName || updates.email || updates.password ) {
            const userUpdates = {
                firstName: updates.firstName,
                lastName: updates.lastName,
                email: updates.email,
                password: updates.password
            };
            const updatedUser = await User.findByIdAndUpdate(existingSousAdmin.user._id, userUpdates, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
        }
          // If Wilaya fields are provided, update the Wilaya document
         
          let wilaya = await Wilaya.findOne({name:updates.name });
          if(wilaya){
          existingSousAdmin.Wilaya = wilaya._id;
          }
          // Save the updated sousAdmin
          const updatedSousAdmin = await existingSousAdmin.save();
          const populatedSousAdmin = await sousAdmin.findById(updatedSousAdmin._id).populate('user')
          .populate('Wilaya')
           .exec();
          res.status(201).json(populatedSousAdmin);
    }catch(err){
        res.status(400).json(err.message)

    }
}


exports.getAdminsWilaya = async(req, res)=>{
    try {
       const  idAdmin = req.params.id
        const sousadmin = await sousAdmin.findById({_id: idAdmin}).populate('Wilaya').populate('user').exec();
        console.log(sousadmin)
        const lawilaya = sousadmin.Wilaya.name
        res.status(201).json({
            wilaya: lawilaya,
            nom: sousadmin.user.firstName,
            prenom: sousadmin.user.lastName,
            _id: sousadmin._id
        });
    } catch (err) {
        res.status(400).json(err.message)
    }
}