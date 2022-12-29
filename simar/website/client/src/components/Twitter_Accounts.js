import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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
    console.log(arr_of_accounts_obj.data.id);
    let arr = arr_of_accounts_obj.data.id.slice(0, 6);
    set_accounts_data_arr(arr);
    // set_accounts_data_arr()
    set_button_state(true);
  };

  return (
    <div className="App">
      <form>
        <input
          placeholder="Enter Search filed"
          onChange={(e) => {
            set_search_query(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            set_button_state(false);
            get_twitter_accounts_data(e);
          }}
        >
          {button_state ? "Gather Accounts" : "Gathering Data"}
        </button>
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
                  <label for="about">ID Link:</label>
                  <span id="about">{item.id_link}</span>
                </li>
                <li>
                  <label for="about">Profile Pic Link:</label>
                  <span id="about">{item.profile_pic_link}</span>
                </li>
                <li>
                  <label for="about">Description</label>
                  <span id="about">{item.description}</span>
                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Twitter_Account;
