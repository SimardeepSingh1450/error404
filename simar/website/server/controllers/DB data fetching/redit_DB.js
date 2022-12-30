const reditModel = require("../../models/redditModel");
const reditDB_fetching = async (req, res) => {
  const redit_data = await reditModel.find();

  console.log(redit_data);

  res.json({
    message: "data of all redit in mongo ",
    data: redit_data,
  });
};
module.exports = reditDB_fetching;
