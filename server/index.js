//import express package 
const express= require('express') 
const mongoose=require("mongoose") 
const dotenv=require('dotenv') 
const jwt=require('jsonwebtoken')
const cors=require('cors');
dotenv.config() 
let index= express() 

 
 
index.use(express.json()) 
index.use(cors());
//Route handler function 

const authRouter=require('./routes/authRouter') 
const wilayaRouter=require('./routes/wilaya') 
const communeRouter=require('./routes/commune') 
const candidatureRouter=require('./routes/candidature') 
const sessionsRouter=require('./routes/sessions') 

index.use("/api/users",authRouter) 
index.use("/api/wilaya",wilayaRouter) 
index.use("/api/commune",communeRouter) 
index.use("/api/candidature",candidatureRouter) 
index.use("/api/session",sessionsRouter) 

const verifiyUser = (req, res, next)=>{
    /*const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;
    const token = localStorage.getItem('token');*/
    const token = req.query.fieldName; 
    const fieldValue = req.query.fieldValue;

    const query = { 
        [token]: fieldValue
    };
    if(!query.token){
        return res.json("err token");
    }else{
        const decodedPayload = decodeToken(query.token);

        return res.json(decodedPayload._id);
    }
}

function decodeToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
        return decoded;
    } catch (error) {
        console.error('Error decoding token:', error.message);
        return null; 
    }
}

index.get('/TestLogin', verifiyUser)

//create server 


mongoose.connect(process.env.conn_str,{ 
    useNewUrlParser:true 
}).then((conn)=>{ 
     
    console.log('db connection sucessefull') 
}).catch((err)=>{ 
    console.log("somme error has occured") 
}) 
 
const port=process.env.port||3000
index.listen(port,()=>{ 
    console.log("server has started ..") 
})