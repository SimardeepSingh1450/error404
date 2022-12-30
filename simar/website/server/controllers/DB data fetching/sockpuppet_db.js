const sockPuppetModel = require("../../models/sockPuppetModel");
const sockpuppetDB_fetching = async (req, res) => {
  const sockpuppet_data = await sockPuppetModel.find();

  console.log(sockpuppet_data);

  res.json({
    message: "data of all sockpuppet credentials ",
    data: sockpuppet_data,
  });
};
module.exports = sockpuppetDB_fetching;
