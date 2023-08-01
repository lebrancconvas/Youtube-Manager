import { describe, test, expect} from '@jest/globals';
import { getTotalVideoOnChannel } from "../utils";

test('MorningNewsTV3 -> 120000', async() => {
  const totalVideo = await getTotalVideoOnChannel('MorningNewsTV3');
  expect(totalVideo).toBe(120000);
}, 10000);

test('Aottergirls -> 2800', async() => {
  const totalVideo = await getTotalVideoOnChannel('aottergirls');
  expect(totalVideo).toBe(2800);
}, 10000);

test('Ardan Labs -> 328', async() => {
  const totalVideo = await getTotalVideoOnChannel('ardanlabs6339');
  expect(totalVideo).toBe(328);
}, 10000);


