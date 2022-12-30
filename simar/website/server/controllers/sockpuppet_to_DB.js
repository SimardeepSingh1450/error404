const redditModel = require("../models/sockPuppetModel");
const redit_saved_to_DB = async (req, res) => {
  const redit_data = require("../fakeperson.json");
  console.log(redit_data);

  if (redit_data) {
    redditModel.insertMany(redit_data);
  }

  res.json({
    message: "data of sockpuppet credentials has been uploaded to DB",
  });
};
module.exports = redit_saved_to_DB;
