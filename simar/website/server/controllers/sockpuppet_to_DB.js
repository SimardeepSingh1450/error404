const redditModel = require("../models/sockPuppetModel");
const redit_saved_to_DB = async (req, res) => {
  const redit_data = require("../fakeperson.json");
  console.log(redit_data);

  if (redit_data) {
    redditModel.insertMany(redit_data);
  }
  res.send({
    message: "data of redit has been uploaded to DB",
  });
};
module.exports = redit_saved_to_DB;
