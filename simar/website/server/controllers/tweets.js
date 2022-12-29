const twitter_twwet_scrapping_controller = require("../json-code/Twitter_Scrapping/scrapping_tweets");
const twitter_tweetsModel = require("../models/twitter_tweetsModel");
const tweets_fun = async (req, res) => {
  const search_query = req.body.search_query;

  const resdata = await twitter_twwet_scrapping_controller(search_query);
  if (resdata.length > 0) {
    twitter_tweetsModel.insertMany(resdata);
  }
  res.send({
    message: "data has been uploaded",
    id: resdata,
  });
};
module.exports = tweets_fun;
