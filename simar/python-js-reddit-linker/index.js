const {spawn}=require('child_process');
const express=require('express');
const app=express();
let redditJson;

// const stringDataToPython="Simar";

// const childPython=spawn('python',['--version']);
// const childPython=spawn('python',['python.py',JSON.stringify(stringDataToPython)])

// childPython.stdout.on('data',(data)=>{
//     console.log(`Output of Python :${data}`);
// })
let searchQueryInReddit="Simar";

app.get('/run-reddit-python-scrape/:searchField',async(req,res)=>{
    res.send('Ran the Python Reddit Scraper');
    searchQueryInReddit=req.params.searchField;

    //calling the Python-Reddit-Scraper-With-Selenium
    const childPython=spawn('python',['python.py',JSON.stringify(searchQueryInReddit)])

    childPython.stdout.on('data',(data)=>{
    console.log('Ran the Python Code');
    })

})

app.get('/get-reddit-data',async(req,res)=>{
    redditJson=require('./reddit.json');
    res.json(redditJson);
})


app.listen(3002,()=>{
    console.log('Server running at PORT : 3002....')
})