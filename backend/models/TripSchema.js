import mongoose from "mongoose";

const TripSchema=new mongoose.Schema({
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    destination:{type:String,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    hotels:[{type:mongoose.Schema.Types.ObjectId,ref:'Hotel'}],
    adults:{type:Number,required:true},

    

})

export default mongoose.model("Trip",TripSchema);