// const {spawn}=require('child_process');
// const express=require('express');
// const app=express();
// let duckJson;

// let searchFieldInDuck="Simar";

// app.get('/run-duck-python-scrape/:searchField',async(req,res)=>{
//     res.send('Ran the Python DuckDuckGo Scraper');
//     searchFieldInDuck=req.params.searchField;

//     //calling the Python-Reddit-Scraper-With-Selenium
//     const childPython=spawn('python',['main.py',JSON.stringify(searchFieldInDuck)])

//     childPython.stdout.on('data',(data)=>{
//     console.log('Ran the Python Code');
//     })

// })



const {spawn}=require('child_process');
let duckJson;

let searchFieldInDuck="Simar";

const runPythonDuck=async(req,res)=>{
    res.send('Ran the Python DuckDuckGo Scraper');
    searchFieldInDuck=req.params.searchField;
  
    //calling the Python-Reddit-Scraper-With-Selenium
    const childPython=spawn('python',['./json-code/duckduckgo-linker/main.py',JSON.stringify(searchFieldInDuck)])
  
    childPython.stdout.on('data',(data)=>{
    console.log('Ran the Python Code');
    })
  
};

// app.get('/get-duck-data',async(req,res)=>{
//     duckJson=require('./duck.json');
//     res.json(duckJson);
// })

const attainduckJson=async(req,res)=>{
    duckJson=require('../../duck.json');
    res.json(duckJson);
  }


// app.listen(3002,()=>{
//     console.log('Server running at PORT : 3002....')
// })

module.exports={runPythonDuck,attainduckJson};
