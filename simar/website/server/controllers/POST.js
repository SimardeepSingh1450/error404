//Importing the Model :
const dataModel=require('../models/dataModel');

const POST=async(req,res)=>{
const recievedDataSet=await req.body.dataobject;
const recievedDatafromparams=await req.params.datafromparams;

const data=new dataModel({data1:recievedDataSet,data2:recievedDatafromparams})

try{
    await data.save();//Saving the New Data in the DB
    res.send('Data Inserted Successfully in the DB');
    res.status(201);
}catch(err){
res.send('Error occured for the POST Request :(');
res.status(422);
console.log(err);
}
}

module.exports=POST;