import express from "express";
import rootdir from "../utils/paths.js";
import path from "node:path";
import getHotels from "../controllers/HotelController.js";


const HotelRoutes=express.Router();

HotelRoutes.get("/preferences",(req,res)=>{
    console.log(req.method, req.path, )
    console.log(rootdir);
    

})

HotelRoutes.post("/display",async (req,res)=>{
    const preferences=req.body;
    await savePreferences(preferences)
    const Hotels=await getHotels(preferences);

    
})

HotelRoutes.post("/selectHotel",async (req,res)=>{
    
    
})

export default HotelRoutes;