const express = require("express");
const app = express();
const cors = require("cors");
// const cookieparser = require("cookie-parser");
require("dotenv").config();

app.use(cors());
// app.use(cookieparser());
app.use(express.json());
app.use("/tweets", require("./Routes/top_tweet_scrap_route"));
app.use("/people", require("./Routes/top_people_scrap_route"));
app.listen(3001 || process.env.PORT, () => {
  console.log("Server is running on port 3001");
});
