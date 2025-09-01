import { describe, it, expect } from 'vitest';
import { twoSum } from '../two-sum';

// twoSum finds indices of the two numbers in the array that add up to the target.

describe('twoSum', () => {
  it('should return indices of two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return indices for negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('should return indices when numbers are repeated', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should return an empty array if no solution exists', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });

  it('should work with zero in the array', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it('should return the first valid pair if multiple exist', () => {
    expect(twoSum([1, 2, 3, 4, 4], 8)).toEqual([3, 4]);
  });
});
