let sherlockJson;

const runPythonSherlock=async(req,res)=>{
    let usernameInput=req.params.userName;
    //python code call
    var exec = require('child_process').exec;
    exec(`cd ./json-code/sherlock-userid-scrapper && python3 main.py ${usernameInput}`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
    res.send('Ran Sherlock Python Code')
};


const getSherlockJson=async(req,res)=>{
    sherlockJson=require('../../sherlock.json');
    res.json(sherlockJson);
}

module.exports={runPythonSherlock,getSherlockJson};


// app.listen(3001,()=>{
//     console.log('Server is running on 3001..')
// })