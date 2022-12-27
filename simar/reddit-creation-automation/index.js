const fakePerson=require('../SockPuppet/fakeperson.json');
const puppeteer=require('puppeteer');

//Plugins to solve captcha
// const StealthPlugin=require('puppeteer-extra-plugin-stealth');
// const {executablePath}=require('puppeteer');

// //dotenv
// require('dotenv').config();

// const config={
//     siteKey:process.env.REDDIT_SITE_KEY,
    
// }

async function run(){
// const pathToExtension=require('path').join(__dirname,'2captcha-solver');
// puppeteer.use(StealthPlugin());

const browser=await puppeteer.launch({
    headless:false,
    defaultViewport:false
    // args: [
    //   `--disable-extensions-except=${pathToExtension}`,
    //   `--load-extension=${pathToExtension}`,
    // ],
    // executablePath: executablePath()
});

// const [page]=await browser.pages();
const page=await browser.newPage();

await page.goto("https://www.reddit.com/register/",{waitUntil:'load',timeout:0});

//selecting the email-Input Element
const emailInput=await page.waitForSelector("#regEmail");
await emailInput.focus();
await page.keyboard.type(fakePerson.Email+"\n");

await page.waitForTimeout(4000);

//await for the next page USERNAME and PASSWORD Input
// const userNameInput=await page.waitForSelector("#regUsername");
// await userNameInput.focus();
// await page.keyboard.type(fakePerson.Username);

// await page.waitForTimeout(4000);

// const passwordInput=await page.waitForSelector("#regPassword");
// await passwordInput.focus();
// await page.keyboard.type(fakePerson.Password);

// await page.waitForTimeout(4000);

// await page.waitForSelector('.recaptcha-checkbox-border')
// await page.click('.recaptcha-checkbox-border');

// await page.waitForSelector(`.recaptcha-checkbox-border[data-state="solved"]`,{timeout:18000})

// await page.click("button[type='submit']");

//await browser.close();


}

run();