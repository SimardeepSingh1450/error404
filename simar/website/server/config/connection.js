require("dotenv").config();
const mongoose = require("mongoose");
const dbConnection = mongoose.connect("mongodb+srv://Kulwinder_Singh:oTs89KzOSMp9Bjz2@cluster0.cktpqf6.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  dbName: "scrapped_data",
});
module.exports = dbConnection;
