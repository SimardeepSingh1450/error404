const duck_duckModel = require("../models/duckduckgoModel");
const redit_saved_to_DB = async (req, res) => {
  const duckduck_go_data = require("../duck.json");
  console.log(duckduck_go_data);

  if (duckduck_go_data) {
    duck_duckModel.insertMany(duckduck_go_data);
  }
  res.send({
    message: "data of redit has been uploaded to DB",
  });
};
module.exports = redit_saved_to_DB;
