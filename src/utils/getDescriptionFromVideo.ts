import { chromium } from "playwright";
import { onClick } from "./actions/onClick";
import { Config } from "../config";

export async function getDescriptionFromVideo(videoID: string): Promise<string> {
  const url = `https://www.youtube.com/watch?v=${videoID}`;
  const descriptionSelector = '#description-inline-expander > yt-attributed-string > span > span';
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

  const descriptionContent = await page.$eval(descriptionSelector, (el) => el.textContent);

  await browser.close();

  if(typeof descriptionContent === 'string') {
    description = descriptionContent;
  }

  return description;
}
