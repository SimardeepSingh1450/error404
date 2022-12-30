import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//Material UI Buttton
import Button from '@mui/material/Button';
//CSS
import '../css/twitterTweets.css'

const Twitter_Tweets = () => {
  const [accounts_data_arr, set_accounts_data_arr] = useState();
  const [button_state, set_button_state] = useState(true);
  const [search_query, set_search_query] = useState("Narendra Modi");
  const searchparams = {
    search_query: search_query,
  };
  const get_twitter_accounts_data = async (e) => {
    e.preventDefault();
    const arr_of_accounts_obj = await axios.post(
      "http://localhost:3001/tweets",
      searchparams
    );
    console.log(arr_of_accounts_obj.data.data);
    if (arr_of_accounts_obj.data.data.length > 4) {
      let arr = arr_of_accounts_obj.data.data.slice(0, 4);
      set_accounts_data_arr(arr);
    } else {
      set_accounts_data_arr(arr_of_accounts_obj.data.data);
    }
    // set_accounts_data_arr()
    set_button_state(true);
  };

  return (
    <div className="App">
      <form>
        <input className='twitterTweetsInput'
          placeholder="Enter Search Field ..."
          onChange={(e) => {
            set_search_query(e.target.value);
          }}
        />
         <Button style={{background:'red'}} onClick={(e) => {
            set_button_state(false);
            get_twitter_accounts_data(e);
          }} variant="contained">
  
  {button_state ? "Gather Tweets Data" : "Gathering Tweets..."}
      
      </Button>
       
      </form>
      <div className="tweetsCardMainDiv">
        {accounts_data_arr &&
          accounts_data_arr.map((item) => {
            return (
              <div className="twitteraccountCard">
              <img style={{width:'50px'}} alt="twitter-profile-pic-link" src={item.profile_pic_url}/>
              <h3>Name : {item.name}</h3>
              <h3>No Of Likes : {item.no_of_likes}</h3>
              <h3>Replys : {item.no_of_replys}</h3>
              <h3>No of retweets : {item.no_of_retweets}</h3>
              <h3>Timing Of Tweet : {item.timing_of_tweet}</h3>
              <h3>Tweet : {item.tweet}</h3>
            </div>
            );
          })}
      </div>
    </div>
  );
};

export default Twitter_Tweets;
