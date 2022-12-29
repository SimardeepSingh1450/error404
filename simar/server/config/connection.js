require('dotenv').config();
const mongoose=require('mongoose');
const dbConnection=mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser:true,
        dbName:'hacktoberfest-mern-template-2022'
    })
module.exports=dbConnection;