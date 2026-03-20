import express from "express";
import HotelRoutes from "./routes/hotelRoutes.js";
import IterarayRoutes from "./routes/iteraryRoutes.js";
import dotenv from "dotenv";

dotenv.config()


const app=express();
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.redirect("/user/Hotels/preferences")
})
app.use("/user/Hotels",HotelRoutes);
app.use("/user/Iterary",IterarayRoutes);

const port =3000;
app.listen(port,()=>{
    console.log(`sever started on http://localhost:${port}`);
});