import React from "react";
import { useState } from "react";
import axios from "axios";
//css
import "../css/Sherlock.css";
//Material UI Buttton
import Button from "@mui/material/Button";

const Sherlock = () => {
  const [button_state, set_button_state] = useState(true);
  const [sherlockData, setSherlockData] = useState();
  const [userInput,setUserInput]=useState('');

  //delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchSherlock = async () => {
    const runPython = await axios.get(
      `http://localhost:3001/python-sherlock/${userInput}`
    );
    console.log("From Backend Response :", runPython);
    await delay(50000);
    const sherlockJson = await axios.get(
      "http://localhost:3001/fetch-sherlock-json"
    );
    console.log("Sherlock Data:", sherlockJson);
    // setSherlockData(sherlockJson.data);
    console.log(sherlockJson.data);
    setSherlockData(sherlockJson.data);
    set_button_state(true);
    console.log(sherlockData);
  };

  return (
    <div>
      <div>
        <input
          className="sherlock-input"
          placeholder="Enter Username to Fetch IDs"
          onChange={(e)=>{setUserInput(e.target.value)}}
        />
        <Button
          style={{ borderRadius: "0", background: "black" }}
          onClick={() => {
            set_button_state(false);
            fetchSherlock();
          }}
          variant="contained"
        >
          {button_state ? "Gather USERID" : "Gathering USERID..."}
        </Button>
      </div>
      <div>
        {sherlockData ? (
          <div className='sherlockMainDiv'>
            <h3><span>7CUPS</span> {sherlockData["7Cups"]}</h3>
            <h3><span>9GAG</span> {sherlockData["9GAG"]}</h3>
            <h3><span>About.me</span> {sherlockData["About.me"]}</h3>
            <h3><span>Academia.edu</span> {sherlockData["Academia.edu"]}</h3>
            <h3><span>AllMyLinks</span> {sherlockData["AllMyLinks"]}</h3>
            <h3><span>AnilList</span> {sherlockData["AnilList"]}</h3>
            <h3><span>Apple Developer</span> {sherlockData["Apple Developer"]}</h3>
            <h3><span>Apple Discussions</span> {sherlockData["Apple Discussions"]}</h3>
            <h3><span>AskFM</span> {sherlockData["AskFM"]}</h3>
            <h3><span>Audiojungle</span> {sherlockData["Audiojungle"]}</h3>
            <h3><span>BLIP.fm</span> {sherlockData["BLIP.fm"]}</h3>
            <h3><span>Behance</span> {sherlockData["Behance"]}</h3>
            <h3><span>BitBucket</span> {sherlockData["BitBucket"]}</h3>
            <h3><span>Blogger</span> {sherlockData["Blogger"]}</h3>
            <h3><span>Bookcrossing</span> {sherlockData["Bookcrossing"]}</h3>
            <h3><span>BraveCommunit</span> {sherlockData["BraveCommunit"]}</h3>
            <h3><span>BuyMeACoffee</span> {sherlockData["BuyMeACoffee"]}</h3>
            <h3><span>BuzzFeed</span> {sherlockData["BuzzFeed"]}</h3>
            <h3><span>CGTrader</span> {sherlockData["CGTrader"]}</h3>
            <h3><span>Championat</span> {sherlockData["Championat"]}</h3>
            <h3><span>Codecademy</span> {sherlockData["Codecademy"]}</h3>
            <h3><span>Codechef</span> {sherlockData["Codechef"]}</h3>
            <h3><span>Codewars</span> {sherlockData["Codewars"]}</h3>
            <h3><span>Crowdin</span> {sherlockData["Crowdin"]}</h3>
            <h3><span>Cults3D</span> {sherlockData["Cults3D"]}</h3>
            <h3><span>DeviantART</span> {sherlockData["DeviantART"]}</h3>
            <h3><span>Discogs</span> {sherlockData["Discogs"]}</h3>
            <h3><span>Disqus</span> {sherlockData["Disqus"]}</h3>
            <h3><span>Docker Hub</span> {sherlockData["Docker Hub"]}</h3>
            <h3><span>Dribbble</span> {sherlockData["Dribbble"]}</h3>
            <h3><span>Duolingo</span> {sherlockData["Duolingo"]}</h3>
            <h3><span>Enjin</span> {sherlockData["Enjin"]}</h3>
            <h3><span>F3.cool</span> {sherlockData["F3.cool"]}</h3>
            <h3><span>Facebook</span> {sherlockData["Facebook"]}</h3>
            <h3><span>Flipboard</span> {sherlockData["Flipboard"]}</h3>
            <h3><span>FortniteTracker</span> {sherlockData["FortniteTracker"]}</h3>
            <h3><span>Freelancer</span> {sherlockData["Freelancer"]}</h3>
            <h3><span>Freesound</span> {sherlockData["Freesound"]}</h3>
            <h3><span>GaiaOnline</span> {sherlockData["GaiaOnline"]}</h3>
            <h3><span>GeeksforGeeks</span> {sherlockData["GeeksforGeeks"]}</h3>
            <h3><span>Genius (Artists)</span> {sherlockData["Genius (Artists)"]}</h3>
            <h3><span>Genius (Users)</span> {sherlockData["Genius (Users)"]}</h3>
            <h3><span>Giphy</span> {sherlockData["Giphy"]}</h3>
            <h3><span>GitHub</span> {sherlockData["GitHub"]}</h3>
            <h3><span>GitLab</span> {sherlockData["GitLab"]}</h3>
            <h3><span>Gitee</span> {sherlockData["Gitee"]}</h3>
            <h3><span>GoodReads</span> {sherlockData["GoodReads"]}</h3>
            <h3><span>Grailed</span> {sherlockData["Grailed"]}</h3>
            <h3><span>Gravatar</span> {sherlockData["Gravatar"]}</h3>
            <h3><span>Gumroad</span> {sherlockData["Gumroad"]}</h3>
            <h3><span>Hackaday</span> {sherlockData["Hackaday"]}</h3>
            <h3><span>HackerEarth</span> {sherlockData["HackerEarth"]}</h3>
            <h3><span>HackerNews</span> {sherlockData["HackerNews"]}</h3>
            <h3><span>HackerRank</span> {sherlockData["HackerRank"]}</h3>
            <h3><span>Hashnode</span> {sherlockData["Hashnode"]}</h3>
            <h3><span>Houzz</span> {sherlockData["Houzz"]}</h3>
            <h3><span>IFTTT</span> {sherlockData["IFTTT"]}</h3>
            <h3><span>Imgur</span> {sherlockData["Imgur"]}</h3>
            <h3><span>Instructables</span> {sherlockData["Instructables"]}</h3>
            <h3><span>Issuu</span> {sherlockData["Issuu"]}</h3>
            <h3><span>LeetCode</span> {sherlockData["LeetCode"]}</h3>
            <h3><span>Letterboxd</span> {sherlockData["Letterboxd"]}</h3>
            <h3><span>Lichess</span> {sherlockData["Lichess"]}</h3>
            <h3><span>Linktree</span> {sherlockData["Linktree"]}</h3>
            <h3><span>LiveJournal</span> {sherlockData["LiveJournal"]}</h3>
            <h3><span>Medium</span> {sherlockData["Medium"]}</h3>
            <h3><span>Memrise</span> {sherlockData["Memrise"]}</h3>

          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Sherlock;
