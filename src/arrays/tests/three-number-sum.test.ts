import { describe, it, expect } from 'vitest';
import { threeNumberSum } from '../three-number-sum';

describe('threeNumberSum()', () => {
  it('should return an array of three numbers that add up to a target sum', () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });

  it('should return an empty array if no three numbers add up to the target sum', () => {
    expect(threeNumberSum([1, 2, 3], 0)).toEqual([]);
  });
});
