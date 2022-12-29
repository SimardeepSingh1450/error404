const mongoose=require('mongoose');
const dataSchema=new mongoose.Schema({
    data1:{
        required:true,
        type:String
    },
    data2:{
        type:Number,
        required:true,
        unique:true
    }
})

const dataModel=mongoose.model('dataModel',dataSchema);
module.exports=dataModel;