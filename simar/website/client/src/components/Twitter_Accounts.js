import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//CSS
import '../css/twitterAccount.css'
//Material UI Buttton
import Button from '@mui/material/Button';

const Twitter_Account = () => {
  const [accounts_data_arr, set_accounts_data_arr] = useState();
  const [button_state, set_button_state] = useState(true);
  const [search_query, set_search_query] = useState("Narendra Modi");
  const searchparams = {
    search_query: search_query,
  };
  const get_twitter_accounts_data = async (e) => {
    e.preventDefault();
    const arr_of_accounts_obj = await axios.post(
      "http://localhost:3001/people",
      searchparams
    );
    console.log(arr_of_accounts_obj.data.data);
    if (arr_of_accounts_obj.data.data.length > 6) {
      let arr = arr_of_accounts_obj.data.data.slice(0, 6);
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
        <input className="twitterAccountInput"
          placeholder="Enter Search Field ..."
          onChange={(e) => {
            set_search_query(e.target.value);
          }}
        />
        <Button style={{borderRadius:'0'}} onClick={(e) => {
            set_button_state(false);
            get_twitter_accounts_data(e);
          }} variant="contained">
  
  {button_state ? "Gather Accounts" : "Gathering Data..."}
      
      </Button>
     
      </form>
      <div className="twitterAccountMain">
        {accounts_data_arr &&
          accounts_data_arr.map((item) => {
            return (
              <div>
                <div className="twitteraccountCard">
                  <img style={{width:'50px'}} alt="twitter-profile-pic-link" src={item.profile_pic_link}/>
                  <h3>Description : {item.description}</h3>
                  <h3>ID : {item.id}</h3>
                  <h3>ID Link : {item.id_link}</h3>
                  <h3>Name : {item.name}</h3>
                  {/* <h3>Profile Pic Link : {item.profile_pic_link}</h3> */}
                </div>

              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Twitter_Account;
