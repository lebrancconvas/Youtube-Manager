import type { Page } from 'playwright';

export async function onClick(page: Page, selector: string): Promise<void> {
  await page.waitForSelector(selector);

  if(selector) {
    await page.click(selector);
  } else {
    console.log('Cannot Click'); 
  }
}
