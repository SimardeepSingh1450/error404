const express = require("express");
const app = express();
const cors = require("cors");

//Third party middleware(CROSS ORIGIN RESOURCE SHARING)
app.use(cors());

//Inbuilt Middleware Used:
app.use(express.json());

//NOTE-> In this Model I am considering Data-1 as Name
//and Data-2 as an ID for identification of the Object

//Connection to DB :
require("./config/connection");

//Importing Controller Functions :
const getFn = require("./controllers/GET");
const postFn = require("./controllers/POST");
const putFn = require("./controllers/PUT");
const deleteFn = require("./controllers/DELETE");

//Making Options for CRUD :
//Read Operation :

app.get("/get", getFn);

//Post Operation :
app.post("/post/:datafromparams", postFn);

//PUT Operation :
app.put("/update/:id", putFn);

//DELETE Operation :
app.delete("/delete/:id", deleteFn);

//sockpuppet scrapping operation
app.use("/sockpuppet", require("./routes/sockpuppet_generator"));

//twitter scrapping operations
app.use("/tweets", require("./routes/top_tweet_scrap_route"));
app.use("/people", require("./routes/top_people_scrap_route"));

//DB data insertion operations
app.get(
  "/save_twitter_accounts",
  require("./controllers/twitter_accounts_to_DB")
);
app.get("/save_twitter_tweets", require("./controllers/twitter_tweets_to_DB"));
app.get("/save_reditcontent", require("./controllers/redit_to_DB"));
app.get("/save_duckduckgo", require("./controllers/duckduck_go_to_DB"));
app.get("/save_sockpuppet", require("./controllers/sockpuppet_to_DB"));
app.get("/save_sherlock", require("./controllers/sherlock_json_to_DB"));

//DB data fetching operations
app.get(
  "/fetch_sockpuppet",
  require("./controllers/DB data fetching/sockpuppet_db")
);
app.get("/fetch_redit", require("./controllers/DB data fetching/redit_DB"));
app.get(
  "/fetch_duckduckgo",
  require("./controllers/DB data fetching/duckduckgo_DB")
);
app.get(
  "/fetch_sherlock",
  require("./controllers/DB data fetching/sherloack_DB")
);
app.get(
  "/fetch_twitteraccounts",
  require("./controllers/DB data fetching/twitter_accounts_DB")
);
app.get(
  "/fetch_twittertweets",
  require("./controllers/DB data fetching/twitter_tweets_DB")
);

//testing repote generation
app.get("/testing", require("./testing/repote"));

//duckduckGo Operations
const { runPythonDuck } = require("./json-code/duckduckgo-linker/index");
app.get("/run-duck-python-scrape/:searchField", runPythonDuck);

const { attainduckJson } = require("./json-code/duckduckgo-linker/index");
app.get("/get-duck-data", attainduckJson);

//googleSearch Operations
const {
  runGoogleScrape,
} = require("./json-code/python-js-google-search-linker/index");
app.get("/run-python-googleSearch/:searchField", runGoogleScrape);

const {
  fetchGoogleJson,
} = require("./json-code/python-js-google-search-linker/index");
app.get("/fetch-googleScrape", fetchGoogleJson);

//reddit Operations
const {
  runRedditPythonCode,
} = require("./json-code/python-js-reddit-linker/index");
app.get("/run-reddit-python-scrape/:searchField", runRedditPythonCode);

const { getRedditJson } = require("./json-code/python-js-reddit-linker/index");
app.get("/get-reddit-data", getRedditJson);

//sherlock Operations
const {
  runPythonSherlock,
} = require("./json-code/sherlock-userid-scrapper/index");
app.get("/python-sherlock/:userName", runPythonSherlock);

const {
  getSherlockJson,
} = require("./json-code/sherlock-userid-scrapper/index");
app.get("/fetch-sherlock-json", getSherlockJson);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running on 3001 || PORT...");
});
