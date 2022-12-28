let usernameInput="joeBiden"


var exec = require('child_process').exec;
exec(`python3 main.py ${usernameInput}`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

