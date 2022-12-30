const sherloackModel = require("../../models/sherlockModel");
const sherloackDB_fetching = async (req, res) => {
  const sherloack_data = await sherloackModel.find();

  console.log(sherloack_data);

  res.json({
    message: "data of all sherloack db ",
    data: sherloack_data,
  });
};
module.exports = sherloackDB_fetching;
