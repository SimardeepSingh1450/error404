import React from 'react'
import {useState} from 'react'
import axios from 'axios'
//css
import '../css/Sherlock.css'
//Material UI Buttton
import Button from '@mui/material/Button';

const Sherlock = () => {
  const [button_state, set_button_state] = useState(true);
  const [sherlockData,setSherlockData]=useState();

  //delay function
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  

  const fetchSherlock=async()=>{
    const runPython=await axios.get('http://localhost:3001/python-sherlock/jaggu')
    console.log('From Backend Response :',runPython);
    await delay(20000);
    const sherlockJson=await axios.get('http://localhost:3001/fetch-sherlock-json')
    console.log('Sherlock Data:',sherlockJson);
    // setSherlockData(sherlockJson.data);
    console.log(sherlockJson.data);
    setSherlockData(sherlockJson.data);
    set_button_state(true);
    console.log(`${sherlockData}.7Cups`);
  }

  return (
    <div>
        <div>
            <input className='sherlock-input' placeholder='Enter Username to Fetch IDs'/>
            <Button style={{borderRadius:'0',background:'black'}} onClick={() => {
            set_button_state(false);
            fetchSherlock();
          }} variant="contained">
  
  {button_state ? "Gather USERID" : "Gathering USERID..."}
      
      </Button>
        </div>
        <div>
           {sherlockData? 
           <div>
            <h3>{sherlockData[0]}</h3>
           </div> : <></>}
        </div>
    </div>
  )
}

export default Sherlock