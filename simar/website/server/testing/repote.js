const repotegenfun = require("./testerjs");
const repotegenerationcontroller = async (req, res) => {
  const data = repotegenfun();
  res.send(data);
};
module.exports = repotegenerationcontroller;
