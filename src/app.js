const express= require("express");
const nodemon = require("nodemon");

const app=express();
app.use(express.json())
const AuthRoute=require("./routes/auth");
app.use("/", AuthRoute);

//app.post("/" , (req,res)=>{

  //  console.log(req.body);
//})

//app.get("/" , (req,res)=>{

   // res.send("HIIII");
//})

app.listen(8000 , ()=>{
    console.log("server listening at 8000")})

