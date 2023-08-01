import { getTotalVideoOnChannel } from "./utils";

async function main() {
  try {
    const totalVideo = await getTotalVideoOnChannel('MorningNewsTV3');
    console.log(totalVideo);
  } catch(err) {
    console.error(err);
  }
}

main();
