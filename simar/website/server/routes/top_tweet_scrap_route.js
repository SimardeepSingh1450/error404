const express = require("express");
const router = express.Router();
const twitter_tweets_scrapping_controller = require("../Controllers/tweets");

router.post("/", twitter_tweets_scrapping_controller);
module.exports = router;
