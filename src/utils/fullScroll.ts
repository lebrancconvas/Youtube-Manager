import { chromium } from 'playwright';
import { Config } from '../config';
import { getTotalVideoOnChannel } from './getTotalVideoOnChannel';

export async function fullScroll(channelID: string): Promise<void> {
  const url = `https://www.youtube.com/@${channelID}/videos`;

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const context = await browser.newContext({
    userAgent: Config.userAgent
  });
  const page = await context.newPage();
  await page.goto(url);

  page.waitForLoadState('domcontentloaded');

  const totalVideo = await getTotalVideoOnChannel(channelID);
  const maxScroll = totalVideo / 32;

  for(let i = 1; i <= maxScroll; i++) {
    console.log(`Iteration: ${i} / ${Math.floor(maxScroll)}`);
    const scrollY = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.mouse.wheel(0, scrollY * i);
    await page.waitForTimeout(1000);
  }

}
