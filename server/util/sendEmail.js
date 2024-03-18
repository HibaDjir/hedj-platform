const nodemailer=require('nodemailer')
const sendEmail=async (option)=>{
    //create a transporter
    const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
       port:Number(578),
        service:'gmail',
        secure:Boolean(process.env.secure),
        auth:{
            user:'labaykaofficiel@gmail.com',
            pass:process.env.Email_Password
        }
    })
    //define ome options
    const email_option={
        from:process.env.Email_User,
        to:option.email,

     subject:option.subject,
     text:option.message
    }
    await transporter.sendMail(email_option)
}
module.exports=sendEmail