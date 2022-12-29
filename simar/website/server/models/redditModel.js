const mongoose=require('mongoose');
const redditSchema=new mongoose.Schema({
    subreddit:{
        required:true,
        type:String
    },
    user:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    upvotes:{
        type:String,
        required:true,
    },
    comments:{
        type:String,
        required:true,
    },
    awards:{
        type:String,
        required:true,
    },
   
})

const redditModel=mongoose.model('redditModel',redditSchema);
module.exports=redditModel;