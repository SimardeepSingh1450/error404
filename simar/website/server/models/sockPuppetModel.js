const mongoose=require('mongoose');
const sockPuppetSchema=new mongoose.Schema({
    Name:{
        required:true,
        type:String
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    MotherMaidenName:{
        type:String,
        required:true,
    },
    SSN:{
        type:String,
        required:true,
    },
    geoPoints:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:String,
        required:true,
    },
    Birthday:{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true,
    },
    Zodiac:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
    },
    gmailPass:{
        type:String,
        required:true,
    },
    Username:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    BrowserAgent:{
        type:String,
        required:true,
    },
    DEBITCARD:{
        type:String,
        required:true,
    },
    cardExpiry:{
        type:String,
        required:true,
    },
    CVV:{
        type:String,
        required:true,
    },
    Occupation:{
        type:String,
        required:true,
    },
    Height:{
        type:String,
        required:true,
    },
    Weight:{
        type:String,
        required:true,
    },
    BloodType:{
        type:String,
        required:true,
    },
    Vehicle:{
        type:String,
        required:true,
    },
    GUID:{
        type:String,
        required:true,
    },
})

const sockPuppetModel=mongoose.model('sockPuppetModel',sockPuppetSchema);
module.exports=sockPuppetModel;