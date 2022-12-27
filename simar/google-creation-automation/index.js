const puppeteer=require('puppeteer');

async function run(){
    const browser=await puppeteer.launch({
        headless:false,
        defaultViewport:false
    });

    const page=await browser.newPage();

    const googleAccountCreationUrl="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp";

    await page.goto(googleAccountCreationUrl,{waitUntil:'load',timeout:0});

    const firstNameInput

}

run();