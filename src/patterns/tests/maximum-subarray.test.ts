import { describe, it, expect } from 'vitest';
import { maxSubArray } from '../maximum-subarray';

describe('maximum subarray', () => {
  it('should return the maximum sum of a subarray', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubArray(nums);
    expect(result).toBe(6);
  });
});
