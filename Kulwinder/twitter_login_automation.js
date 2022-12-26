const puppeteer = require("puppeteer");
require("dotenv").config();
const randomintfrominterval = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
let sleep_for = async (page, min, max) => {
  let sleep_duration = randomintfrominterval(min, max);
  console.log("waiting for", sleep_duration / 1000, "seconds");
  page.waitUntil({ sleep_duration });
};
const authenticate = async (page) => {
  try {
    await page.type(
      "input[autocomplete='username']",
      process.env.USERNAME_TWITTER
    );

    const but = await page.$x(`//div[@role="button"]//span[text()='Next']`);
    but[0].click();

    const el = await page.waitForXPath("//input[@name='password']");
    await el.type(process.env.PASSWORD);

    const butnew = await page.$x(
      `//div[@role="button"]//span[text()='Log in']`
    );
    butnew[0].click();
  } catch (err) {
    console.log(err);
  }
};
(async () => {
  const browser = await puppeteer.launch({
    headless: false,

    defaultViewport: false,
  });
  const pg = await browser.newPage();
  await pg.goto("https://twitter.com/i/flow/login", {
    waitUntil: "networkidle0",
  });

  authenticate(pg);
  // browser.close();
})();
