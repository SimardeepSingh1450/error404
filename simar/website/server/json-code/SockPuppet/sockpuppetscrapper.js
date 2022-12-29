const puppeteer = require("puppeteer");

const fakePersonJson = require("./fakeperson.json");
const fs = require("fs");
async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto("https://www.fakenamegenerator.com/", {
    waitUntil: "load",
    timeout: 0,
  });

  const userFromSite = await page.evaluate(
    () =>
      document.querySelector("#details .content .info .content .address h3")
        .innerText
  );
  const nameSplitterArray = userFromSite.split(" ");
  const firstNameFromSite = nameSplitterArray[0];
  const lastNameFromSite = nameSplitterArray[2];
  console.log("User :", userFromSite);

  const addressFromSite = await page.evaluate(
    () =>
      document.querySelector("#details .content .info .content .address .adr")
        .innerText
  );
  console.log("Address :", addressFromSite);

  const mumFromSite = await page.evaluate(
    () =>
      document.querySelector("#details .content .info .content .extra dd")
        .innerText
  );
  console.log("Mother's Maiden Name :", mumFromSite);

  const ssnFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(2) dd"
      ).innerText
  );
  const slicedSsn = ssnFromSite.slice(0, 11);
  console.log("SSN :", slicedSsn);

  const geoFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(3) dd"
      ).innerText
  );
  console.log("GEO :", geoFromSite);

  const phnFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(5) dd"
      ).innerText
  );
  console.log("Phone :", phnFromSite);

  const bDayFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(8) dd"
      ).innerText
  );
  console.log("Birthday :", bDayFromSite);

  const ageFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(9) dd"
      ).innerText
  );
  console.log("Age :", ageFromSite);

  const zodiacFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(10) dd"
      ).innerText
  );
  console.log("Zodiac :", zodiacFromSite);

  const emailFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(12) dd"
      ).innerText
  );
  const slicedEmail = emailFromSite.slice(0, -57);
  console.log("Email :", slicedEmail);

  const userNameFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(13) dd"
      ).innerText
  );
  console.log("Username :", userNameFromSite);

  const passwordFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(14) dd"
      ).innerText
  );
  console.log("Password :", passwordFromSite);

  const browserAgentFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(16) dd"
      ).innerText
  );
  console.log("BrowserAgent :", browserAgentFromSite);

  const visaorMasterCardFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(18) dd"
      ).innerText
  );
  if (visaorMasterCardFromSite[0] == "4") {
    console.log("Visa :", visaorMasterCardFromSite);
  } else if (visaorMasterCardFromSite[0] == "5") {
    console.log("MasterCard :", visaorMasterCardFromSite);
  }

  const cardExpiryFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(19) dd"
      ).innerText
  );
  console.log("Card Expiry :", cardExpiryFromSite);

  const cvvFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(20) dd"
      ).innerText
  );
  console.log("CVV :", cvvFromSite);

  const occupationFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(23) dd"
      ).innerText
  );
  console.log("Occupation :", occupationFromSite);

  const heightFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(25) dd"
      ).innerText
  );
  console.log("Height :", heightFromSite);

  const weightFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(26) dd"
      ).innerText
  );
  console.log("Weight :", weightFromSite);

  const bloodTypeFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(27) dd"
      ).innerText
  );
  console.log("Blood Type :", bloodTypeFromSite);

  const vehicleFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(34) dd"
      ).innerText
  );
  console.log("Vehicle :", vehicleFromSite);

  const guidFromSite = await page.evaluate(
    () =>
      document.querySelector(
        "#details .content .info .content .extra .dl-horizontal:nth-child(35) dd"
      ).innerText
  );
  console.log("GUID :", guidFromSite);

  //Going to secondPage
  await page.goto("https://thispersondoesnotexist.com/", {
    waitUntil: "load",
    timeout: 0,
  });

  //download image code for puppeteer
  await page.screenshot({
    path: "./json-code/SockPuppet/public/randomperson.png",
    fullPage: true,
  });

  const fakePerson = {
    Name: userFromSite,
    firstName: firstNameFromSite,
    lastName: lastNameFromSite,
    Address: addressFromSite,
    MotherMaidenName: mumFromSite,
    SSN: slicedSsn,
    geoPoints: geoFromSite,
    PhoneNumber: phnFromSite,
    Birthday: bDayFromSite,
    Age: ageFromSite,
    Zodiac: zodiacFromSite,
    Email: slicedEmail,
    gmail: "kannadanna1450@gmail.com",
    gmailPass: "kannadanna2311",
    Username: userNameFromSite,
    Password: passwordFromSite,
    BrowserAgent: browserAgentFromSite,
    DEBITCARD: visaorMasterCardFromSite,
    cardExpiry: cardExpiryFromSite,
    CVV: cvvFromSite,
    Occupation: occupationFromSite,
    Height: heightFromSite,
    Weight: weightFromSite,
    BloodType: bloodTypeFromSite,
    Vehicle: vehicleFromSite,
    GUID: guidFromSite,
  };

  //writing the data inside valid json
  fs.writeFile("fakeperson.json", JSON.stringify(fakePerson), (err) => {
    if (err) throw err;
    else {
      console.log("success with json generation");
    }
  });
  return fakePerson;

  // await browser.close();
}
module.exports = run;
