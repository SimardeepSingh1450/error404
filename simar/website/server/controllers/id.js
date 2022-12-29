const twitter_id_scrapping_controller = require("../json-code/Twitter_Scrapping/scrapping_ids");
const twitter_accountsModel = require("../models/twitter_accountsModel");
const id_fun = async (req, res) => {
  const search_query = req.body.search_query;
  console.log(search_query);
  const resdata = await twitter_id_scrapping_controller(search_query);
  if (resdata.length > 0) {
    twitter_accountsModel.insertMany(resdata);
  }
  res.send({
    message: "data has been uploaded",
    data: resdata,
  });
};
module.exports = id_fun;
