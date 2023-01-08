const puppeteer = require("puppeteer");
const fs = require("fs");
require("dotenv").config();
let tweets = [];
const authenticate = async (page) => {
  try {
    await page.type(
      "input[autocomplete='username']",
      "kannadanna1450@gmail.com"
    );
    const but = await page.$x(`//div[@role="button"]//span[text()='Next']`);
    but[0].click();

    // await page.waitForSelector(
    //   "#layers > div > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-14lw9ot.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div.css-1dbjc4n.r-mk0yit.r-1f1sjgu > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input"
    // );
    // await page.type(
    //   "#layers > div > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-14lw9ot.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div.css-1dbjc4n.r-mk0yit.r-1f1sjgu > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-ttdzmv > div > input",
    //   "@anna_kannad"
    // );
    await page.keyboard.press("Enter");

    const el = await page.waitForXPath("//input[@name='password']");
    await el.type("kannadanna2311");

    const butnew = await page.$x(
      `//div[@role="button"]//span[text()='Log in']`
    );
    butnew[0].click();
  } catch (err) {
    console.log(err);
  }
};
const search = async (page, search_query) => {
  try {
    await page.click("a[href='/explore']");
    await page.waitForSelector("input[placeholder='Search Twitter']");
    await page.type("input[placeholder='Search Twitter']", search_query + " ");
    await page.keyboard.press("Enter");
  } catch (err) {
    console.log(err);
  }
};
const scraping = async (page, items) => {
  await page.waitForSelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > section > div > div > div:nth-child(4)"
  );
  items = await page.evaluate(() => {
    const items = Array.from(
      document.querySelectorAll(
        "section > div > div > div > div > div > div > article"
      )
    );
    return items.map((item) => ({
      name: item.querySelector(
        "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2.r-dnmrzs > div > a > div  div.css-901oao.r-1awozwy.r-18jsvk2.r-6koalj.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-bcqeeo.r-1udh08x.r-3s2u2q.r-qvutc0 > span > span"
      ).innerText,
      id: item.querySelector(
        "div > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs > a > div > span"
      ).innerText,
      tweet: item.querySelector("div[data-testid='tweetText']").innerText,
      profile_pic_url: item.querySelector(
        "div a > div.css-1dbjc4n.r-14lw9ot img"
      ).src,
      timing_of_tweet: item.querySelector("time").innerText,
      no_of_replys: item.querySelector(
        "div > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span"
      ).innerText,

      no_of_likes: item.querySelector(
        "div:nth-child(4) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span"
      ).innerText,
      no_of_retweets: item.querySelector(
        "div:nth-child(3) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span"
      ).innerText,
    }));
  });
  tweets = tweets.concat(items);
};
const testing = async (page, itemTargetCount) => {
  try {
    await page.waitForSelector(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > section > div > div > div:nth-child(4)"
    );

    let items = [];
    let i = 4;
    while (i) {
      await scraping(page, items);
      await scrolling(page);

      i--;
    }
    return items;
  } catch (err) {
    console.log(err);
  }
};
const scrolling = async (page) => {
  previousHeight = await page.evaluate("document.body.scrollHeight");
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return;
};

const twitter_tweets_scrapping_fun = async (search_query) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const pg = await browser.newPage();
  await pg.goto("https://twitter.com/i/flow/login", {
    waitUntil: "networkidle0",
  });

  await authenticate(pg);
  await pg.waitForNavigation({ waitUntil: "networkidle2" });

  await pg.goto("https://twitter.com/home", {
    waitUntil: "networkidle2",
  });
  await search(pg, search_query);
  const tweets_scrapped = await testing(pg, 12);
  let uniqueItems = [...new Set(tweets)];
  const tweet_data = JSON.stringify(uniqueItems);

  fs.writeFile(
    "./json-code/Twitter_Scrapping/data/tweets_data.json",
    tweet_data,
    function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    }
  );
  browser.close();
  return uniqueItems;
};
module.exports = twitter_tweets_scrapping_fun;
