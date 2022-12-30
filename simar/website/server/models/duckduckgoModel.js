const mongoose = require("mongoose");
const ddgosearchSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  website: {
    required: true,
    type: String,
  },
  "news-link": {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
});

const ddgosearchModel = mongoose.model("ddgosearchModel", ddgosearchSchema);
module.exports = ddgosearchModel;
