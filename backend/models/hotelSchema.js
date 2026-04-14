import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name:{type:String,required:true},
    property_id:{type:String,required:true,unique:true},
    photo:{type:String,required:true},
    ratings:{type:Number,required:true},
    reviews:{type:Number},
    ammenities:[{type:String}],
    bookings:[{
        app_name:{type:String,required:true},
        rate_per_night:{type:Number,required:true},
        total_rate:{type:Number,required:true},
        link:{type:String,required:true}
    }],
    
    coordinates:{
        lat:{type:Number,required:true},
        lon:{type:Number,required:true}
    }
})

export default mongoose.model("Hotel",)