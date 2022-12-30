const duckduckgoModel = require("../../models/duckduckgoModel");
const duckduckgoDB_fetching = async (req, res) => {
  const duckduckgo_data = await duckduckgoModel.find();

  console.log(duckduckgo_data);

  res.json({
    message: "data of all suck suck go db ",
    data: duckduckgo_data,
  });
};
module.exports = duckduckgoDB_fetching;
