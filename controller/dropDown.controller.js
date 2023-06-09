
import {Pincode,City} from '../model/association.js'
import State from "../model/state.model.js"


export const searchCity=async (request,response,next)=>{
    try{
    let find=await State.findOne({
        where:{
            stateName:request.body.stateName
        }
    })
    if(find){
        let findAll=await City.findAll({
            where:{
                stateId:find.id,
            }
        })
        return response.status(200).json({result:findAll,status:true});
    }
    return response.status(401).json({message:"bad request",status:false});
}
catch(err){
    return response.status(500).json({err:"internal server error",status:false})
}
}

export const searchPincode=async (request,response,next)=>{
    try{
    let find=await City.findOne({
        where:{
            cityName:request.body.cityName
        }
    })
    if(find){
        let findAll=await Pincode.findAll({
            where:{
                cityName:find.cityName
            }
        })
       
        return response.status(200).json({result:findAll,status:true});
    }
    return response.status(401).json({message:"bad request",status:false});
}
catch(err){
    console.log(err);
    return response.status(500).json({err:"internal server error",status:false})
}
}

