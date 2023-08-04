import { chromium } from "playwright";
import { Config } from "../config";

export const getTitleFromVideo = async(videoID: string): Promise<string | ''> => {
  const params = `watch?v=${videoID}`;
  const titleSelector = '#title > h1 > yt-formatted-string';
  let title = '';

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const context = await browser.newContext({
    userAgent: Config.userAgent,
    locale: Config.locale,
    baseURL: Config.baseURL
  });

  const page = await context.newPage();

  await page.goto(params);
  await page.waitForSelector(titleSelector);

  const titleContent = await page.$eval(titleSelector, (el) => el.textContent);

  if(typeof titleContent === 'string') {
    title = titleContent;
  }

  await browser.close();

  return title;
}
