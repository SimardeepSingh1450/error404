const express = require("express");
const router = express.Router();
const twitter_account_scrapping_controller = require("../controllers/id");

router.post("/", twitter_account_scrapping_controller);
module.exports = router;
