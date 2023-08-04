import { test, expect } from '@jest/globals';
import { getTitleFromVideo } from '../utils';

test('', async() => {
  const result = await getTitleFromVideo('LBXUX5N8UI');
  expect(result).toBe('Prince of Tennis - Ni Utata San Utata');
}, 10000);
