import { test, expect } from '@jest/globals';
import { getViewCountFromVideo } from "../utils";

test('QvlS0-eDgeg -> 99905', async() => {
  const viewCount = await getViewCountFromVideo('QvlS0-eDgeg');
  expect(viewCount).toBe(99905);
}, 10000);

test('HjaJ7J_3Bsg -> 334801', async() => {
  const viewCount = await getViewCountFromVideo('HjaJ7J_3Bsg');
  expect(viewCount).toBe(334801);
}, 10000);
