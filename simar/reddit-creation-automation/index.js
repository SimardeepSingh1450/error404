const puppeteer=require('puppeteer');
const fakePerson=require('../SockPuppet/fakeperson.json');

async function run(){
const browser=await puppeteer.launch({
    headless:false,
    defaultViewport:false
});

const page=await browser.newPage();

await page.goto("https://www.reddit.com/register/",{waitUntil:'load',timeout:0});

//selecting the email-Input Element
const emailInput=await page.waitForSelector("#regEmail");
await emailInput.focus();
await page.keyboard.type(fakePerson.Email+"\n");


//await for the next page USERNAME and PASSWORD Input
const userNameInput=await page.waitForSelector("#regUsername");
await userNameInput.focus();
await page.keyboard.type(fakePerson.);

//wait for the siteKey to arrive
const siteKey=await page.evaluate(()=> document.querySelector('script').innerText);

//await browser.close();


}

run();