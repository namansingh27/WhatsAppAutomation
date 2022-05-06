const puppeteer=require("puppeteer");
async function scrape(url){
    let browser=await puppeteer.launch({headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    let page=await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("span[title='Harshit Bhatia']");
    const target= await page.$("span[title='Harshit Bhatia']");
    await target.click();
    const input=await page.$("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text");

    for(let i=0;i<20;i++){
        await input.type("AUTOMATED MESSAGE!");
        await page.keyboard.press("Enter");
        
    }
    console.log("Message send");
    
};
scrape('https://web.whatsapp.com/');