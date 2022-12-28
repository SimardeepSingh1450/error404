const express=require('express');
const app=express();
let sherlockJson;

app.get('/python-sherlock/:userName',async(req,res)=>{
    let usernameInput=req.params.userName;
    //python code call
    var exec = require('child_process').exec;
    exec(`python3 main.py ${usernameInput}`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
    res.send('Ran Sherlock Python Code')
})

app.get('/fetch-sherlock-json',async(req,res)=>{
    sherlockJson=require('./output.json');
    res.json(sherlockJson);
})



app.listen(3001,()=>{
    console.log('Server is running on 3001..')
})