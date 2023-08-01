import type { Page } from 'playwright';
import { getTotalVideoOnChannel } from './getTotalVideoOnChannel';

export async function fullScroll(page: Page, channelID: string): Promise<void> {
  const totalVideo = await getTotalVideoOnChannel(channelID);
  const maxScroll = totalVideo / 32;

  for(let i = 1; i <= maxScroll; i++) {
    console.log(`Iteration: ${i} / ${Math.floor(maxScroll)}`);
    const scrollY = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.mouse.wheel(0, scrollY * i);
    await page.waitForTimeout(1000);
  }
}
