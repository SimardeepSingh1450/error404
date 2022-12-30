const sherlockModel = require("../models/sherlockModel");
const sherloack_saved_to_DB = async (req, res) => {
  const sherlock_data = require("../sherlock.json");
  console.log(sherlock_data);

  if (sherlock_data) {
    sherlockModel.insertMany(sherlock_data);
  }
  res.json({
    message: "data of sherlock has been uploaded to DB",
  });
};
module.exports = sherloack_saved_to_DB;
