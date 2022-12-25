const express=require('express');
const app=express();
const fs=require('fs');
app.use(express.json());

const fakePersonJson=require('./fakeperson.json');

app.get('/',async(req,res)=>{
    res.send('Chal rha hai')
})


app.get('/run-puppeteer',async(req,res)=>{
    run();
    res.send('Fake Identity and Image Generated Locally on the System')
})

app.get('/fetch-json',async(req,res)=>{
    res.json(fakePersonJson);
})

app.listen(3001||process.env.PORT,()=>{
    console.log('Server is listening at 3001...')
})


//Puppeteer Code
const puppeteer=require('puppeteer');

async function run(){
    const browser=await puppeteer.launch({
        headless:true,
        defaultViewport:false
    });


    const page=await browser.newPage();
    await page.goto('https://www.fakenamegenerator.com/', {waitUntil: 'load', timeout: 0});

    const userFromSite=await page.evaluate(()=> document.querySelector('#details .content .info .content .address h3').innerText);
    console.log('User :',userFromSite);

    const addressFromSite=await page.evaluate(()=> document.querySelector('#details .content .info .content .address .adr').innerText);
    console.log('Address :',addressFromSite);

    const mumFromSite=await page.evaluate(()=> document.querySelector('#details .content .info .content .extra dd').innerText);
    console.log('Mother\'s Maiden Name :',mumFromSite);

    const ssnFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(2) dd').innerText);
    const slicedSsn=ssnFromSite.slice(0,12);
    console.log('SSN :',slicedSsn);

    const geoFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(3) dd').innerText);
    console.log('GEO :',geoFromSite);

    const phnFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(5) dd').innerText);
    console.log('Phone :',phnFromSite);

    const bDayFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(8) dd').innerText);
    console.log('Birthday :',bDayFromSite);

    const ageFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(9) dd').innerText);
    console.log('Age :',ageFromSite);

    const zodiacFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(10) dd').innerText);
    console.log('Zodiac :',zodiacFromSite);

    const emailFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(12) dd').innerText);
    console.log('Email :',emailFromSite);

    const passwordFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(14) dd').innerText);
    console.log('Password :',passwordFromSite);

    const browserAgentFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(16) dd').innerText);
    console.log('BrowserAgent :',browserAgentFromSite);

    const visaorMasterCardFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(18) dd').innerText);
    if(visaorMasterCardFromSite[0]=='4'){
        console.log('Visa :',visaorMasterCardFromSite);
    }else if(visaorMasterCardFromSite[0]=='5'){
        console.log('MasterCard :',visaorMasterCardFromSite);
    }

    const cardExpiryFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(19) dd').innerText);
    console.log('Card Expiry :',cardExpiryFromSite);

    const cvvFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(20) dd').innerText);
    console.log('CVV :',cvvFromSite);

    const occupationFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(23) dd').innerText);
    console.log('Occupation :',occupationFromSite);

    const heightFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(25) dd').innerText);
    console.log('Height :',heightFromSite);

    const weightFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(26) dd').innerText);
    console.log('Weight :',weightFromSite);

    const bloodTypeFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(27) dd').innerText);
    console.log('Blood Type :',bloodTypeFromSite);

    const vehicleFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(34) dd').innerText);
    console.log('Vehicle :',vehicleFromSite);    

    const guidFromSite=await page.evaluate(()=>document.querySelector('#details .content .info .content .extra .dl-horizontal:nth-child(35) dd').innerText);
    console.log('GUID :',guidFromSite);   


    //Going to secondPage 
    await page.goto("https://thispersondoesnotexist.com/",{waitUntil:'load',timeout:0});

    //download image code for puppeteer
    await page.screenshot({path:'randomperson.png',fullPage:true});

    const fakePerson={
        Name:userFromSite,
        Address:addressFromSite,
        MotherMaidenName:mumFromSite,
        SSN:ssnFromSite,
        geoPoints:geoFromSite,
        PhoneNumber:phnFromSite,
        Birthday:bDayFromSite,
        Age:ageFromSite,
        Zodiac:zodiacFromSite,
        Email:emailFromSite,
        Password:passwordFromSite,
        BrowserAgent:browserAgentFromSite,
        DEBITCARD:visaorMasterCardFromSite,
        cardExpiry:cardExpiryFromSite,
        CVV:cvvFromSite,
        Occupation:occupationFromSite,
        Height:heightFromSite,
        Weight:weightFromSite,
        BloodType:bloodTypeFromSite,
        Vehicle:vehicleFromSite,
        GUID:guidFromSite
    }

    //writing the data inside valid json
    fs.writeFile('fakeperson.json',JSON.stringify(fakePerson),(err)=>{
        if(err) throw err;
        else {
            console.log('success with json generation');
        }
    })


    //uplaoding the image to tempfile
    // await page.goto("https://tempfile.io/en",{waitUntil:'load',timeout:0});

    // //upload file button
    // const [filechooser]=await Promise.all([
    //     page.waitForFileChooser(),
    //     page.click(".btn btn-primary btn-lg px-5")
    // ]);
    // //passing the file
    // filechooser.accept(["randomperson.jpg"]);

    // //waiting for the upload process
    // await page.waitForTimeout(6000)


    // await browser.close();


}

// run();