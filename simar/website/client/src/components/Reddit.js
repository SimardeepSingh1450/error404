import React from 'react'
import { useState } from 'react';
import axios from "axios";
//Material UI Buttton
import Button from '@mui/material/Button';
//CSS
import '../css/Reddit.css'

const Reddit = () => {
  const [button_state, set_button_state] = useState(true);
  const [searchField,setSearchField]=useState('');
  const [redditJson,setReditJson]=useState([]);

  //delay function
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  
  const getRedditData=async()=>{
    let redditPythonCode=await axios.get(`http://localhost:3001/run-reddit-python-scrape/${searchField}`);
    console.log('Ran Python Code',redditPythonCode);
    await delay(40000);
    // let data=await axios.get('http://localhost:3001/save_reditcontent');
    // console.log('Saved Reddit to DB',data);
    // await delay(20000);
    // let jsonfromDB=await axios.get('http://localhost:3001/fetch_redit')
    // console.log('Fetch',jsonfromDB);
    const jsonfromBackEnd=await axios.get('http://localhost:3001/get-reddit-data')
    let arrayJsonfromDB=jsonfromBackEnd.data;
    let slicedArray=arrayJsonfromDB.slice(-5);
    console.log(slicedArray);
    setReditJson(slicedArray);
    // console.log(redditJson);
    set_button_state(true);
  }

  return (
    <div>
        <div>
            <input onChange={(e)=>{setSearchField(e.target.value)}} className='redditInput' placeholder='Search Reddit...'/>
            <Button style={{backgroundColor:'red'}} onClick={() => {
          set_button_state(false);
          getRedditData();
        }} variant="contained">
  
        {button_state ? "Fetch Reddit Data" : "Under fetching..."}
      
      </Button>
      <div className='mainredditCardDiv'>
        {redditJson ? redditJson.map((item)=>{
            return(
            <div className='redditDataCard'>
                <h3><span className='span-reddit'>Subreddit :</span> {item.subreddit}</h3>
                <h3><span className='span-reddit'>User :</span> {item.user}</h3>
                <h3><span className='span-reddit'>Title :</span> {item.title}</h3>
                <h3><span className='span-reddit'>Upvotes :</span> {item.subreddit}</h3>
                <h3><span className='span-reddit'>Comments :</span>  {item.subreddit}</h3>

            </div>)
}):<></>}
      </div>
        </div>
    </div>
  )
}

export default Reddit