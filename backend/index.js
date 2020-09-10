const puppeteer = require("puppeteer");

async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    //await page.authenticate({username: "fordmondeo@i.ua",password: "azarro332377",});
    await page.goto("https://www.olx.ua/account/", {
      waitUntil: "networkidle0", // wait until page load
    });
    await page.type("#userEmail", "fordmondeo@i.ua");
    await page.type("#userPass", "azarro332377");
    // click and wait for navigation
    await Promise.all([
      page.click("#se_userLogin"),
      page.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);
    await page.goto("https://www.olx.ua/", { waitUntil: "networkidle0" });
    await page.type("#headerSearch", "iphone");
    page.click("#submit-searchmain");
    //let title = await page.title();
    //console.log("title:" + title);
  } catch (error) {
    console.error(error);
  }
}

main();
