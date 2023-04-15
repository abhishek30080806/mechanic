
import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    customerId:Number,  
    shopId:Number,
    problem:String,
    location:String,
    vehicleNo:String,
    categoryId:Number,
    vehicleName:String,
    status:{
        type:String,
        defaultValue:"pending",
    },
    mechanicId:String,
    actualProblem:String,
    billAmmount:Number,
    date:String,
    time:String,
    latLong:String
});

export const Booking = mongoose.model("booking",bookingSchema);