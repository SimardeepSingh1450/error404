const mongoose = require("mongoose");
const tweetsSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  tweet: {
    required: true,
    type: String,
  },
  profile_pic_url: {
    required: true,
    type: String,
  },
  timing_of_tweet: {
    required: true,
    type: String,
  },
  no_of_replys: {
    required: true,
    type: String,
  },
  no_of_likes: {
    required: true,
    type: String,
  },
  no_of_retweets: {
    required: true,
    type: String,
  },
});

const twitter_tweetsModel = mongoose.model("twitter_tweetsModel", tweetsSchema);
module.exports = twitter_tweetsModel;
