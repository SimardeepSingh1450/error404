const twitter_accountsModel = require("../models/twitter_accountsModel");
const accounts_saved_to_DB = async (req, res) => {
  const accounts_data = require("../json-code/Twitter_Scrapping/data/id_data.json");
  console.log(accounts_data);

  if (accounts_data) {
    twitter_accountsModel.insertMany(accounts_data);
  }
  res.json({
    message: "data of twitter accounts has been uploaded to DB",
  });
};
module.exports = accounts_saved_to_DB;
