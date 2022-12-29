//Importing the Model :
const dataModel=require('../models/dataModel');
const GET=async(req,res)=>{
    try{
    res.status(200);
    const allData=await dataModel.find();
    res.json({data:allData});
    }catch(err){
        res.status(502);
        res.send('Error Occured for the GET Request :(');
        console.log(err);
    }
}

module.exports=GET;