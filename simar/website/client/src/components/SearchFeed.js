import React from 'react'
import { useState } from 'react';
import axios from 'axios';
//css
import '../css/searchFeed.css'
//Material UI Buttton
import Button from '@mui/material/Button';

const searchFeed = () => {
  const [button_state, set_button_state]=useState(true);

  //delay function
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const getsearchData=async()=>{
    const duckduckGo=await axios.get('http://localhost:3001/run-duck-python-scrape/neymar')
    console.log(duckduckGo);
    //delay
    await delay(10000);
    const duckduckGoJson=await axios.get('http://localhost:3001/get-duck-data')
    console.log('DUCK DUCK DATA :',duckduckGoJson);

    await delay(5000);
    const googleSearch=axios.get('http://localhost:3001/run-python-googleSearch/messi')
    console.log(googleSearch);
     //delay
     await delay(10000);
     const googleJson=await axios.get('http://localhost:3001/fetch-googleScrape');
     console.log('GOOGLE DATA :',googleJson);

     set_button_state(true);
  }


  return (
    <div>
      <div>
        <input className='searchfeedInput' placeholder='Enter the Search Field...'/>
        <Button style={{backgroundColor:'red'}} onClick={() => {
          set_button_state(false);
          getsearchData();
        }} variant="contained">
  
        {button_state ? "Fetch Reddit Data" : "Under fetching..."}
      
      </Button>
      </div>

        <div className='left-right-search-main'>
          <div className='searchfeedLeft'>
          <h3>left</h3>
          </div>
          <div className='searchfeedRight'>
          <h3>right</h3>
          </div>
        </div>
    </div>
  )
}

export default searchFeed