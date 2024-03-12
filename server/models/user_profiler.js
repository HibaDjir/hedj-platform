const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const crypto=require('crypto')
const passwordComplexity = require("joi-password-complexity");

//modified
const user_profiler = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    resetToken: { type: String },
    resetTokenExpiration: { type: Date },
    active: { type: Boolean, default: true },
    Role: { type:String , enum:["admin","med","user"], default:"user"},
    Pesonne:  { type: String},
    verified:{
      type:Boolean,
      default:false
    },
    passwordChang:Date,
    passwordResettoken:String,
    passwordResettokenExpire:Date,
});

user_profiler.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn:process.env.LOGIN_Expire,
	});
	return token;
};
const User = mongoose.model("user", user_profiler);

const validateSignup = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};
const validateLog = (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required().label("Email"),
      password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
  };

  //generat a random token
  user_profiler.methods.createResetPasswordToken=async function(){
    const resetToken=crypto.randomBytes(32).toString('hex')
    this.passwordResettoken=crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResettokenExpire=Date.now()+10*60*1000
    console.log(resetToken,this.passwordResettoken)
    return resetToken
}
module.exports = { User, validateSignup ,validateLog };