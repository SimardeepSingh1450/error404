const twitter_id_scrapping_controller = require("./scrapping_ids");
const id_fun = async (req, res) => {
  const search_query = req.body.search_query;
  console.log(search_query);
  const resdata = await twitter_id_scrapping_controller(search_query);
  res.send({
    message: "data has been uploaded",
    id: resdata,
  });
};
module.exports = id_fun;
