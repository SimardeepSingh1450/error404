require("dotenv").config();
const mongoose = require("mongoose");
const dbConnection = mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  dbName: "scrapped_data",
});
module.exports = dbConnection;
