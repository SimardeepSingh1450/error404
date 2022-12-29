const mongoose = require("mongoose");
const accountsSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  id_link: {
    required: true,
    type: String,
  },
  profile_pic_link: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

const twitter_accountsModel = mongoose.model(
  "twitter_accountsModel",
  accountsSchema
);
module.exports = twitter_accountsModel;
