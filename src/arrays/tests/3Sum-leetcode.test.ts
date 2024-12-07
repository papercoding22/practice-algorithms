import { it, expect, describe } from 'vitest';
import { threeSum } from '../3Sum-leetcode';

describe('threeSum', () => {
  // for the input [0, 0, 0]
  it('should return the correct result for the second test case', () => {
    const nums = [0, 0, 0, 0];
    const expected = [[0, 0, 0]];
    const actual = threeSum(nums);
    expect(actual).toEqual(expected);
  });

  it('should return the correct result for the first test case', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    const actual = threeSum(nums);
    expect(actual).toEqual(expected);
  });
});
