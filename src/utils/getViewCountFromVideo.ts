import { chromium } from "playwright";
import { onClick } from "./onClick";
import { Config } from "../config";

export async function getViewCountFromVideo(videoID: string): Promise<number> {
  const url = `https://www.youtube.com/watch?v=${videoID}`;
  const viewCountSelector = '#info > span:nth-child(1)';
  const showmoreSelector = '#expand';
  let viewCount = 0;

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const context = await browser.newContext({
    userAgent: Config.userAgent
  });

  const page = await context.newPage();

  await page.goto(url);
  await page.waitForSelector(viewCountSelector);

  await onClick(page, showmoreSelector);

  const viewCountRaw = await page.$eval(viewCountSelector, (el) => el.textContent) || '0';
  viewCount = Number(viewCountRaw.replace(/[^0-9]/g, '').trim());

  return viewCount;
}

// getViewCountFromVideo('ZsycOjvEQiE')
//   .then((result) => {
//     console.log(result);
//   })
