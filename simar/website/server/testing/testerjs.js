// console.log(duck);

const reptegenerator = () => {
  const duck = require("../duck.json");
  const fakseperson = require("../fakeperson.json");
  const redit = require("../reddit.json");
  const googlesearch = require("../googleSearch.json");
  const taccount = require("../json-code/Twitter_Scrapping/data/id_data.json");
  const ttweets = require("../json-code/Twitter_Scrapping/data/tweets_data.json");
  let commonarr = [];
  commonarr.push({
    duckdata: duck,
    fakeidentitydata: fakseperson,
    reditdata: redit,
    googlesearchdata: googlesearch,
    twitter_Accounts_data: taccount,
    twitter_tweets_data: ttweets,
  });
  //   duck.map((item) => {
  //     commonarr[0].duckdata.push(item);
  //   });
  console.log(commonarr[0]);
  return commonarr[0];
};
module.exports = reptegenerator;
// reptegenerator();
