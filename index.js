import { setServers } from "dns/promises";
import express from "express";
import HotelRoutes from "./routes/hotelRoutes.js";
import IterarayRoutes from "./routes/iteraryRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoutes from "./routes/authRoutes.js";
setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config()


const app=express();
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.redirect("/user/login")
})

app.use("/user/Hotels",HotelRoutes);
app.use("/user/Iterary",IterarayRoutes);
app.use("/user",AuthRoutes);


const port =3000;

const db1=mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>{
    console.log("connected to mongodb");
    app.listen(port,()=>{
    console.log(`sever started on http://localhost:${port}`);
    });

}).catch((err)=>{
    console.log("error connecting to mongodb",err);
})