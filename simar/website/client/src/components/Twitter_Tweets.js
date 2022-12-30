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
          placeholder="Enter Search filed"
          onChange={(e) => {
            set_search_query(e.target.value);
          }}
        />
         <Button style={{background:'red'}} onClick={(e) => {
            set_button_state(false);
            get_twitter_accounts_data(e);
          }} variant="contained">
  
  {button_state ? "Gather Tweets Data" : "Gathering Data"}
      
      </Button>
       
      </form>
      <div>
        {accounts_data_arr &&
          accounts_data_arr.map((item) => {
            return (
              <div>
                <li>
                  <label for="about">Name:</label>
                  <span id="about">{item.name}</span>
                </li>
                <li>
                  <label for="about">ID:</label>
                  <span id="about">{item.id}</span>
                </li>
                <li>
                  <label for="about">Tweet:</label>
                  <span id="about">{item.tweet}</span>
                </li>
                <li>
                  <label for="about">Profile Pic URL:</label>
                  <span id="about">{item.profile_pic_url}</span>
                </li>
                <li>
                  <label for="about">Timing of Tweet:</label>
                  <span id="about">{item.timing_of_tweet}</span>
                </li>
                <li>
                  <label for="about">No of Likes:</label>
                  <span id="about">{item.no_of_likes}</span>
                </li>
                <li>
                  <label for="about">No of Retweets:</label>
                  <span id="about">{item.no_of_retweets}</span>
                </li>
                <li>
                  <label for="about">No of Replies:</label>
                  <span id="about">{item.no_of_replys}</span>
                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Twitter_Tweets;
