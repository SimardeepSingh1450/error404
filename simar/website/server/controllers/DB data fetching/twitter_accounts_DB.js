const twitterAccountsModel = require("../../models/twitter_accountsModel");
const twitteraccountsDB_fetching = async (req, res) => {
  const twitter_data = await twitterAccountsModel.find();

  console.log(twitter_data);

  res.json({
    message: "data of all twitter accounts ",
    data: twitter_data,
  });
};
module.exports = twitteraccountsDB_fetching;
