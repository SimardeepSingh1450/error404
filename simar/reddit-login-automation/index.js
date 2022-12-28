const fakePerson=require('../SockPuppet/fakeperson.json');
const fakeGmail=require('../../FakeGmail.json');
const puppeteer=require('puppeteer');
const puppeteerExtra=require('puppeteer-extra');
const StealthPlugin=require('puppeteer-extra-plugin-stealth');

//Plugins to solve captcha
// const {executablePath}=require('puppeteer');

// //dotenv
// require('dotenv').config();

// const config={
//     siteKey:process.env.REDDIT_SITE_KEY,
    
// }

async function run(){
// const pathToExtension=require('path').join(__dirname,'2captcha-solver');
// puppeteer.use(StealthPlugin());

puppeteerExtra.use(StealthPlugin());

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
const redditLoginUrl="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F";
const gmailLoginUrl="https://accounts.google.com/v3/signin/identifier?dsh=S369608870%3A1672153336878500&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh4GBVwKgqUpOCX42cgD6XAP_oMZ1i_n87WkH2impMPjs9RcaP1yFff1LSdoTVWifnEq6vhvbw";

//Gmail Login First
await page.goto(gmailLoginUrl,{waitUntil:'load',timeout:0});

await page.waitForTimeout(2000);
await page.keyboard.type(fakeGmail.email+"\n");

await page.waitForTimeout(3000);
await page.keyboard.type(fakeGmail.pass+"\n");

await page.waitForTimeout(3000);

//Reddit Login Second
await page.goto(redditLoginUrl,{waitUntil:'load',timeout:0});
await page.waitForTimeout(2000);


// await page.goto("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.reddit.com%3Fid%3Dauth936064&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&prompt=select_account&client_id=705819728788-b2c1kcs7tst3b7ghv7at0hkqmtc68ckl.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.reddit.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow")
// await page.waitForTimeout(2000);
await page.click("#google-sso");

await page.waitForTimeout(2000);

await page.click(".tgnCOd");

await page.waitForTimeout(2000);

// await page.goto("http://reddit.com");


// await page.keyboard.type(fakeGmail.email+"\n");




// await page.waitForTimeout(1000);


// await page.waitForTimeout(3000);
// //entering gmail credentials
// // const emailInput=await page.evaluate(()=>document.querySelector("#identifierId.whsOnd.zHQkBf"));
// // await emailInput.focus();
// await page.keyboard.type(fakeGmail.email+"\n");



//await browser.close();


}

run();