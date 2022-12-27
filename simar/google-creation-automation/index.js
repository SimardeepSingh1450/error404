const puppeteer=require('puppeteer');
const fakePerson=require('../SockPuppet/fakeperson.json');


async function run(){
    const browser=await puppeteer.launch({
        headless:false,
        defaultViewport:false,
        // args:[`--proxy-server=175.106.10.164:8089`]
    });

    const page=await browser.newPage();


    // const googleAccountCreationUrl="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp";

    // await page.goto(googleAccountCreationUrl,{waitUntil:'load',timeout:0});

    // await page.waitForTimeout(3000);
    // const firstNameInput=await page.waitForSelector("#firstName");
    // await firstNameInput.focus();
    // await page.keyboard.type(fakePerson.firstName);

    // await page.waitForTimeout(1000);
    // const lastNameInput=await page.waitForSelector("#lastName");
    // await lastNameInput.focus();
    // await page.keyboard.type(fakePerson.lastName);

    // await page.waitForTimeout(1000);
    // const userNameInput=await page.waitForSelector("#username");
    // await userNameInput.focus();
    // await page.keyboard.type(fakePerson.Username+"\n");

    // await page.waitForTimeout(1000);
    // // const passwordInput=await page.waitForSelector("#passwd");
    // // await passwordInput.focus();
    // await page.keyboard.type(fakePerson.Password+"\n");

    // await page.waitForTimeout(1000);
    // // const confirmPasswordInput=await page.waitForSelector(".whsOnd zHQkBf");
    // // await confirmPasswordInput.focus();
    // await page.keyboard.type(fakePerson.Password+"\n");

    await page.goto("https://whatismyipaddress.com/")

    // await page.waitForTimeout(1000);
    
    // await page.click("button[type='button']");

    

}

run();