const express= require("express");
const router=express.Router();


router.post("/" , (req,res)=>{

     res.send("login succesfull");
  });

router.post("/register" , (req,res)=>{

    res.send("register succesfull");
 });





module.exports=router;
