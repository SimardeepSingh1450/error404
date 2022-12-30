import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { CSVLink } from "react-csv";
const Excellcreation = () => {
  const [visible, setvisible] = useState(false);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const createexcell = async () => {
    setvisible(true);
    const data = await axios.get("http://localhost:3001/testing");
    console.log(data.data.duckdata);
    setData1(data.data.duckdata);
    setData2([data.data.fakeidentitydata]);
    setData3(data.data.googlesearchdata);
    setData4(data.data.reditdata);
    setData5(data.data.twitter_Accounts_data);
    setData6(data.data.twitter_tweets_data);
  };

  return (
    <div className="sockpuppetMain">
      <button
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          createexcell();
        }}
        variant="contained"
      >
        Create Report
      </button>
      {visible && (
        <div className="reportCardCSV">
          <CSVLink data={data1} onClick={() => {}}>
            DuckDuckGo Data
          </CSVLink>
          <CSVLink data={data2} onClick={() => {}}>
            Sock Puppet
          </CSVLink>
          <CSVLink data={data3} onClick={() => {}}>
            Google Search
          </CSVLink>
          <CSVLink data={data4} onClick={() => {}}>
            Redit
          </CSVLink>
          <CSVLink data={data5} onClick={() => {}}>
            Twitter Accounts
          </CSVLink>
          <CSVLink data={data6} onClick={() => {}}>
            Twiiter Tweets
          </CSVLink>
        </div>
      )}
    </div>
  );
};

export default Excellcreation;
