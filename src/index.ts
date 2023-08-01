import { getTotalVideoOnChannel, getAllVideoTitleAndURLs } from "./utils";

async function main() {
  try {
    // const totalVideo = await getTotalVideoOnChannel('MorningNewsTV3');
    // console.log(totalVideo);
    await getAllVideoTitleAndURLs('tpcoder');
  } catch(err) {
    console.error(err);
  }
}

main();
