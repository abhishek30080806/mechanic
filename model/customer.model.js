import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
    id:{
       type:String,
       require:true,
    },
    customerName:{
        type:String,
       require:true
    },
    email:{
        type:String,
        allowNull:true,
    }
    ,
    contact:{ 
        type:Number,
        allowNull:false,
    },
    password:{
        type:String,
    },  
    photo:{
        type:String,
        allowNull:true,
    },
    rating:{
        type:Number,
        allowNull:true,
    }    
});

export const Customer = mongoose.model("customer",customerSchema);