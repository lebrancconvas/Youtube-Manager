import { chromium } from "playwright";
import { Config } from "../config";
import { fullScroll } from "./fullScroll";
import { writeFile } from "fs/promises";
import path from 'path';

export async function getAllVideoTitleAndURLs(channelID: string): Promise<any> {
  let results = [];

  const url = `https://www.youtube.com/@${channelID}/videos`;
  const videoTitleSelector = '#video-title';
  const videoURLSelector = '#video-title-link';

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const context = await browser.newContext({
    userAgent: Config.userAgent
  });

  const page = await context.newPage();

  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');

  await fullScroll(page, channelID);
  await page.waitForSelector(videoTitleSelector);
  await page.waitForSelector(videoURLSelector);

  let titles = await page.$$eval(videoTitleSelector, (els) => els.map((el) => el.textContent));
  let urls = await page.$$eval(videoURLSelector, (els) => els.map((el) => el.getAttribute('href')));

  for(let i = 0; i < urls.length; i++) {
    const data = {
      id: i + 1,
      title: titles[i],
      url: `https://www.youtube.com${urls[i]}`
    }
    results.push(data);
  }

  await browser.close();

  writeFile(path.join(__dirname, '..', 'examples', 'out', 'titleAndurls', `${channelID}.json`), JSON.stringify(results, null, 2));
  console.log(`Channel ID: ${channelID} -> ${results.length} Videos`);
}
