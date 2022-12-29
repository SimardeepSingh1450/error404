import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Sockpuppet = () => {
  const [sockpuppetdata, setsockpuppetdata] = useState();
  const [button_state, set_button_state] = useState(true);
  const getsockpuppetdata = async () => {
    const sockpuppet_data = await axios.get("http://localhost:3001/sockpuppet");
    console.log(sockpuppet_data.data.data);
    setsockpuppetdata(sockpuppet_data.data.data);
    set_button_state(true);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          set_button_state(false);
          getsockpuppetdata();
        }}
      >
        {button_state ? "Fetch Sock Puppet" : "Under fetching"}
      </button>
      <div>
        {sockpuppetdata && (
          <div>
            <li>
              <label for="about">Name:</label>
              <span id="about">{sockpuppetdata.Name}</span>
            </li>
            <li>
              <label for="about">First Name</label>
              <span id="about">{sockpuppetdata.firstName}</span>
            </li>
            <li>
              <label for="about">Last Name:</label>
              <span id="about">{sockpuppetdata.lastName}</span>
            </li>
            <li>
              <label for="about">Address:</label>
              <span id="about">{sockpuppetdata.Address}</span>
            </li>
            <li>
              <label for="about">Age:</label>
              <span id="about">{sockpuppetdata.Age}</span>
            </li>
            <li>
              <label for="about">User Name:</label>
              <span id="about">{sockpuppetdata.Username}</span>
            </li>
            <li>
              <label for="about">Email:</label>
              <span id="about">{sockpuppetdata.Email}</span>
            </li>
            <li>
              <label for="about">Password</label>
              <span id="about">{sockpuppetdata.Password}</span>
            </li>
            <li>
              <label for="about">Gmail:</label>
              <span id="about">{sockpuppetdata.gmail}</span>
            </li>
            <li>
              <label for="about">Gmail Pass:</label>
              <span id="about">{sockpuppetdata.gmailPass}</span>
            </li>
            <li>
              <label for="about">Phone Number</label>
              <span id="about">{sockpuppetdata.PhoneNumber}</span>
            </li>
            <li>
              <label for="about">Birthday:</label>
              <span id="about">{sockpuppetdata.Birthday}</span>
            </li>
            <li>
              <label for="about">Blood Type:</label>
              <span id="about">{sockpuppetdata.BloodType}</span>
            </li>
            <li>
              <label for="about">Browser Agent</label>
              <span id="about">{sockpuppetdata.BrowserAgent}</span>
            </li>
            <li>
              <label for="about">Debit Card No:</label>
              <span id="about">{sockpuppetdata.DEBITCARD}</span>
            </li>
            <li>
              <label for="about">CVV Number:</label>
              <span id="about">{sockpuppetdata.CVV}</span>
            </li>
            <li>
              <label for="about">Card Expiry Date:</label>
              <span id="about">{sockpuppetdata.cardExpiry}</span>
            </li>
            <li>
              <label for="about">GUID:</label>
              <span id="about">{sockpuppetdata.GUID}</span>
            </li>
            <li>
              <label for="about">SNN:</label>
              <span id="about">{sockpuppetdata.SSN}</span>
            </li>
            <li>
              <label for="about">Vehicle:</label>
              <span id="about">{sockpuppetdata.Vehicle}</span>
            </li>
            <li>
              <label for="about">Weight:</label>
              <span id="about">{sockpuppetdata.Weight}</span>
            </li>
            <li>
              <label for="about">Height:</label>
              <span id="about">{sockpuppetdata.Height}</span>
            </li>
            <li>
              <label for="about">Mother Maiden Name:</label>
              <span id="about">{sockpuppetdata.MotherMaidenName}</span>
            </li>
            <li>
              <label for="about">Zodiac Symbol:</label>
              <span id="about">{sockpuppetdata.Zodiac}</span>
            </li>
            <li>
              <label for="about">Geo Points:</label>
              <span id="about">{sockpuppetdata.geoPoints}</span>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sockpuppet;
