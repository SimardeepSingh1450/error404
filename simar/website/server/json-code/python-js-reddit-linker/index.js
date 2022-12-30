const {spawn}=require('child_process');

let searchQueryInReddit="Simar";


const runRedditPythonCode=async(req,res)=>{
    res.send('Ran the Python Reddit Scraper');
    searchQueryInReddit=req.params.searchField;

    //calling the Python-Reddit-Scraper-With-Selenium
    const childPython=spawn('python',['./json-code/python-js-reddit-linker/python.py',JSON.stringify(searchQueryInReddit)])

    childPython.stdout.on('data',(data)=>{
    console.log('Ran the Python Code');
    })

}


const getRedditJson=async(req,res)=>{
    let redditJson=require('../../reddit.json');
    res.json(redditJson);
}

module.exports={runRedditPythonCode,getRedditJson};

// app.listen(3002,()=>{
//     console.log('Server running at PORT : 3002....')
// })