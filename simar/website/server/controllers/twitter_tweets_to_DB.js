const twitter_tweetsModel = require("../models/twitter_tweetsModel");
const tweets_saved_to_DB = async (req, res) => {
  const accounts_data = require("../json-code/Twitter_Scrapping/data/tweets_data.json");
  console.log(accounts_data);

  if (accounts_data) {
    twitter_tweetsModel.insertMany(accounts_data);
  }
  res.json({
    message: "data of twitter accounts has been uploaded to DB",
  });
};
module.exports = tweets_saved_to_DB;
