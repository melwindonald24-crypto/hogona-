import express from "express";
import rootdir from "../plugins/paths.js";
import path from "node:path";
import getHotels from "../controllers/HotelController.js";


const HotelRoutes=express.Router();

HotelRoutes.get("/preferences",(req,res)=>{
    console.log(req.method, req.path, )
    console.log(rootdir);
    res.sendFile(path.join(rootdir,"views","userPlan.html"))

})

HotelRoutes.post("/display",async (req,res)=>{
    const preferences=req.body;
    const Hotels=await getHotels(preferences);
    res.render("DisplayHotels",{hotels:Hotels});
    
})

HotelRoutes.post("/selectHotel",async (req,res)=>{
    
})

export default HotelRoutes;