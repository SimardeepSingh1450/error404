const run = require("../json-code/SockPuppet/sockpuppetscrapper");
const sockPuppetModel = require("../models/sockPuppetModel");
const id_fun = async (req, res) => {
  const resdata = await run();
  if (resdata != null) {
    sockPuppetModel.create(resdata);
  }
  res.send({
    message: "data has been uploaded",
    data: resdata,
  });
};
module.exports = id_fun;
