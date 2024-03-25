//import express package 
const express= require('express') 
const mongoose=require("mongoose") 
const dotenv=require('dotenv') 
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

index.use("/api/users",authRouter) 
index.use("/api/wilaya",wilayaRouter) 
index.use("/api/commune",communeRouter) 
index.use("/api/candidature",candidatureRouter) 

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