const puppeteer = require("puppeteer");
const fs = require("fs");
// require("dotenv").config();
const randomintfrominterval = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
let complete_data_of_people = [];
const authenticate = async (page) => {
  try {
    await page.type(
      "input[autocomplete='username']",
      "kannadanna1450@gmail.com"
    );

    const but = await page.$x(`//div[@role="button"]//span[text()='Next']`);
    but[0].click();

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
const scrapping_people = async (page, items) => {
  await page.waitForSelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > section > div > div > div > div > div > div"
  );
  items = await page.evaluate(() => {
    const items = Array.from(
      document.querySelectorAll(
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > section > div > div > div > div > div > div"
      )
    );
    return items.map((item) => ({
      name: item.querySelector("span").innerText,
      id: item.querySelector(
        "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 > div > a > div > div > span"
      ).innerText,
      link: item.querySelector("a").href,
      img_link: item.querySelector("img").src,
      description: item.querySelector(
        "div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox > div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-1h8ys4a.r-1jeg54m.r-qvutc0"
      ).innerText,
    }));
  });
  complete_data_of_people = complete_data_of_people.concat(items);
};
const scrolling = async (page) => {
  previousHeight = await page.evaluate("document.body.scrollHeight");
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return;
};
const scrape_ids = async (page, itemTargetCount) => {
  try {
    let items = [];
    let i = 4;
    await page.waitForSelector(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-1dbjc4n.r-1e5uvyk.r-6026j > div:nth-child(2) > nav > div > div.css-1dbjc4n.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1udh08x > div > div:nth-child(3) > a > div > div > span"
    );
    await page.click(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-1dbjc4n.r-1e5uvyk.r-6026j > div:nth-child(2) > nav > div > div.css-1dbjc4n.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1udh08x > div > div:nth-child(3) > a > div > div > span"
    );
    await page.waitForSelector(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > section > div > div > div"
    );
    while (i) {
      await scrapping_people(page, items);
      await scrolling(page);
      i--;
    }
    return items;
  } catch (err) {
    console.log(err);
  }
};
const twitter_id_scrapping_fun = async (search_query) => {
  // const search_query = req.body.search_query;
  const browser = await puppeteer.launch();
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

  const ids = await scrape_ids(pg, 12);
  // console.log(complete_data_of_people);
  let uniqueItems = [...new Set(complete_data_of_people)];
  const people_data = JSON.stringify(uniqueItems);
  console.log(people_data);
  fs.writeFile("./data/id_data.json", people_data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
  return people_data;
};
module.exports = twitter_id_scrapping_fun;
