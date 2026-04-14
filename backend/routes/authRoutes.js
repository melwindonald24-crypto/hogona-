import express from "express";
import rootdir from "../utils/paths.js";
import path from "node:path";
import User from "../models/userSchema.js";

const AuthRoutes=express.Router();

AuthRoutes.get("/login",(req,res)=>{
    res.sendFile(path.join(rootdir,"views","login.html"));
})

AuthRoutes.post("/login",async (req,res)=>{
    const{name,email,password}=req.body;
    const details=await User.findOne({email:email})
    if(details)
    {
        if(details.password===password)
        {
            res.redirect("/user/Hotels/preferences");
        }
        else{
            res.redirect("/user/login");
        }
        
    }
    else{
        await User.create({
            name:name,
            email:email,
            password:password,
        })
        res.redirect("/user/Hotels/preferences");

    }
})

export default AuthRoutes;