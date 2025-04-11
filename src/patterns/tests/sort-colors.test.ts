import { it, expect, describe } from 'vitest';

import { sortColors } from '../sort-colors';

describe('sortColors', () => {
  it('should return the correct result for the first test case', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    const expected = [0, 0, 1, 1, 2, 2];
    sortColors(nums);
    expect(nums).toEqual(expected);
  });
});
