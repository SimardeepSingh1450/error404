// const express=require('express');
// const app=express();
//python code runner module-> child_process
const {spawn}=require('child_process');
let googleJson;

// app.get('/run-python-googleSearch/:searchField',async(req,res)=>{
// let searching=req.params.searchField;
// let chlidPython=spawn('python',['googleSearch.py',JSON.stringify(searching)]);
// chlidPython.stdout.on('data',(data)=>{
//     console.log('Ran the python Code for googleScrape')
// })

// res.send('Ran google Scrape Code')

// });

const runGoogleScrape=async(req,res)=>{
    let searching=req.params.searchField;
    let chlidPython=spawn('python',['./json-code/python-js-google-search-linker/googleSearch.py',JSON.stringify(searching)]);
    chlidPython.stdout.on('data',(data)=>{
        console.log('Ran the python Code for googleScrape')
    })
    
    res.send('Ran google Scrape Code')
    }

// app.get('/fetch-googleScrape',async(req,res)=>{
//     googleJson=require('./googleSearch.json');
//     res.json(googleJson);
// })
const fetchGoogleJson=async(req,res)=>{
    googleJson=require('../../googleSearch.json');
    res.json(googleJson);
  }


  module.exports={runGoogleScrape,fetchGoogleJson};
// app.listen(3001,()=>{
//     console.log('Server is running on 3001..')
// })