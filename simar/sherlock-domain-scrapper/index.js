const {spawn}=require('child_process');
let usernameInput="salmankhan"
const childPython=spawn('python',['main.py',JSON.stringify(usernameInput)]);
childPython.stdout.on('data',(data)=>{
    console.log('Ran python Sherlock Code')
})