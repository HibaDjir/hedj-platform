
const jwt=require('jsonwebtoken')
const Joi = require("joi");
const { User, validateLog, validateSignup,ValidateResetPassword } = require("../models/user_profiler");
const bcrypt = require("bcrypt");
const sendEmail=require('../util/sendEmail')


// authControllers.js
exports.signup = async (req, res) => 
    
  
   {
	try {
		const { error } = validateSignup(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.json({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user=await new User({ ...req.body, password: hashPassword }).save();
		const token = user.generateAuthToken();
		const url=`http://3001/${user.id}/verify/${token}`	
			await sendEmail({
			email: user.email,
			 subject:'Verifying Email...',
			 message:url
		});
		res.status(201).json({ message: "User created successfully",token ,role:user.Role})
		
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	
	}
};
//verify Email -------------------------------------------
exports.verifyEmail=async(req,res,next)=>{
    try {
        const token = req.params.token;
		console.log(token)
        if (!token) return res.status(400).send({ message: "no token" });
		const id =req.params.id
        const user = await User.findOne({ _id:id});
    
        if (!user) return res.status(400).send({ message: " user not found" });
    
        // Update user's verification status
        user.verified = true;
        await user.save();
    
        res.status(200).send({ message: "Email verified successfully" });
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error",error });
      }
    
}
//login----------------------------------------------------------------
exports.login=async (req, res) => {
	try {
		const { error } = validateLog(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		//res.status(200).send({ data: token, message: "logged in successfully" });
		res.json({
			Role:user.Role,
			token:token
		})
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });console.log('error',error.message)
	}


};

//Forgotte password ---------------------------------------------------
exports.forgotPassword=async(req,res,next)=>{
    //1.get the user from the posted email
	const {email} = req.body
	try {
		const oldUser=await User.findOne({email})
		if(!oldUser){
			return res.status(401).send({message: "User does not exist"})
		}
		const secret = process.env.JWTPRIVATEKEY + oldUser.password
		const token = jwt.sign({email: oldUser.email, id:oldUser._id}, secret, {expiresIn : '10m'})
		const link=`http://localhost:3001/resetPassword/${oldUser._id}/${token}`
		console.log(link)
		await sendEmail({
			email: oldUser.email,
			 subject:'reset password mail...',
			 message: ` to reset your password click on the link below \n\n ${link}`
		});
	} catch (error) {
		res.json('eror')
	}
  
}


exports.resetPassord = async(req, res) =>{
	const {id, token} = req.params
	const {password} = req.body
	const { error } = ValidateResetPassword(req.body);
	if (error)
		return res.status(400).send({ message: error.details[0].message });
	const oldUser=await User.findOne({_id: id})
		if(!oldUser){
			return res.status(401).send({message: "User does not exist"})
		}
	const secret = process.env.JWTPRIVATEKEY + oldUser.password
	try {
		const verify = jwt.verify(token, secret)
		const encryptedPassword = await bcrypt.hash(password, 10)
		await User.updateOne(
			{
				_id: id
			},
			{
				$set: {
				password: encryptedPassword
			}}
	)
		res.json({status:"success"})
	} catch (error) {
		console.log(error)
		res.json("error while updating password")
	}


}


//role ----------------------------------------------




  