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
//user
const authRouter=require('./routes/authRouter') 
index.use("/api/users",authRouter) 

// candidat
const candidatRoutes = require("./routes/candidatRouter");
index.use("/api/candidats", candidatRoutes);
// wilaya et daira 

const wilayaRouter = require('./routes/wilayaRouter');
const dairaRouter = require('./routes/dairaRouter');

index.use('/api/wilayas', wilayaRouter);
index.use('/api/dairas', dairaRouter);



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


////////////////////////////////




















