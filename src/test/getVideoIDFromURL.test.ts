import { test, expect } from '@jest/globals';
import { getVideoIDFromURL } from "../utils";

test("Test Normal URL", () => {
  const result = getVideoIDFromURL('https://www.youtube.com/watch?v=RLBXUX5N8UI');
  expect(result).toBe('RLBXUX5N8UI');
});

test("Test URL with Options", () => {
  const result = getVideoIDFromURL('https://www.youtube.com/watch?v=e4HVimJw1w4&list=PLGdWBkkerBc_M1lS2u2ray-_RXU_F4VcE&index=20');
  expect(result).toBe('e4HVimJw1w4');
});
