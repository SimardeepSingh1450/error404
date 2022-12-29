//Importing the Model :
const dataModel=require('../models/dataModel');
const PUT=async(req,res)=>{
const newUpdatedData=req.body.dataobject;
const id=req.params.id;//We need to send the id / any field so as to identify and Update the data of tha Object in DB

try{
    await dataModel.updateOne({id},{$set:{data1:newUpdatedData}})
        res.status(204);
        res.send('Updated Data in DB Successfully');
        
    }catch(err){
    res.send('Error occured for the PUT Request :(');
    res.status(400);
    console.log(err);
}

}
module.exports=PUT;