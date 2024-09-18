import { describe, it, expect } from 'vitest';
import { twoNumberSum } from '../two-number-sum';

describe('twoNumberSum', () => {
  it('should return an array of two numbers that add up to a target sum', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1]);
  });

  it('should return an empty array if no two numbers add up to the target sum', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 100)).toEqual([]);
  });
});
