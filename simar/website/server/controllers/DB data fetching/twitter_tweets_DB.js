const twitterTweetsModel = require("../../models/twitter_tweetsModel");
const twitterDB_fetching = async (req, res) => {
  const twitter_data = await twitterTweetsModel.find();

  console.log(twitter_data);

  res.json({
    message: "data of all twitter tweets ",
    data: twitter_data,
  });
};
module.exports = twitterDB_fetching;
