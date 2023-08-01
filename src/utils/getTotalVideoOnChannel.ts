import { chromium } from 'playwright';
import { Config } from '../config';

export async function getTotalVideoOnChannel(channelID: string): Promise<number> {
  let result = 0;
  const url = `https://www.youtube.com/@${channelID}/videos`;
  const totalVideoSelector = '#videos-count';

  const browser = await chromium.launch({
    headless: Config.headless
  });

  const context = await browser.newContext({
    userAgent: Config.userAgent
  });

  const page = await context.newPage();

  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector(totalVideoSelector);

  const extractTotalVideo = await page.$eval(totalVideoSelector, (el) => el.textContent);

  if(Config.setBrowserClose) {
    await browser.close();
  }

  if(!extractTotalVideo) {
    return result;
  }

  const extractTotalVideoSplit = extractTotalVideo?.split(' ') as string[];

  if(extractTotalVideoSplit[0] === 'วิดีโอ') {
    const totalVideo = extractTotalVideoSplit[1];
    switch(extractTotalVideoSplit[2]) {
      case 'ร้อย':
        result = Number(totalVideo) * 100;
        break;
      case 'พัน':
        result = Number(totalVideo) * 1000;
        break;
      case 'หมื่น':
        result = Number(totalVideo) * 10000;
        break;
      case 'แสน':
        result = Number(totalVideo) * 100000;
        break;
      case 'ล้าน':
        result = Number(totalVideo) * 1000000;
        break;
      default:
        result = Number(totalVideo);
        break;
    }
  } else {
    const totalVideo = extractTotalVideoSplit[0];
    totalVideo.includes('K') ? result = Number(totalVideo.replace('K', '')) * 1000 : result = Number(totalVideo);
  }

  return result;

}

