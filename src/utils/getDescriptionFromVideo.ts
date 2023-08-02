import { chromium } from "playwright";
import { onClick } from "./onClick";
import { Config } from "../config";

export async function getDescriptionFromVideo(videoID: string): Promise<string> {
  const url = `https://www.youtube.com/watch?v=${videoID}`;
  const descriptionSelector = '';
  const showmoreSelector = '#expand';
  let description = '';

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const context = await browser.newContext({
    userAgent: Config.userAgent
  });

  const page = await context.newPage();

  await page.goto(url);
  await page.waitForSelector(descriptionSelector);

  await onClick(page, showmoreSelector);

  description = await page.$eval(descriptionSelector, (el) => el.textContent) as string;

  await browser.close();

  if(description) {
    return description;
  }

  return '';
}
