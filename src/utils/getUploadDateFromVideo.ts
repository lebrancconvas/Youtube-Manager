import { chromium } from "playwright";
import { Config } from "../config";
import { onClick } from "./onClick";

export const getUploadDateFromVideo = async(videoID: string): Promise<Date | null> => {
  const params = `watch?v=${videoID}`;
  const uploadDateSelector = '#info > span:nth-child(3)';

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const content = await browser.newContext({
    userAgent: Config.userAgent,
    locale: Config.locale,
    baseURL: Config.baseURL,
  });

  const page = await content.newPage();

  await page.goto(params);
  await onClick(page, '#expand');
  await page.waitForSelector(uploadDateSelector);

  const uploadDateContent = await page.$eval(uploadDateSelector, (el) => el.textContent);

  await browser.close();

  if(typeof uploadDateContent === 'string') {
    const date = new Date(uploadDateContent);
    return date;
  }

  return null;
};
