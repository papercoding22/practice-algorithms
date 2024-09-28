import { describe, expect, it } from 'vitest';
import { fourNumberSum, fourNumberSumUsingHashTable } from '../four-number-sum';

describe('fourNumberSum()', () => {
  it('should return an array of four numbers that add up to a target sum', () => {
    expect(fourNumberSum([7, 6, 4, -1, 1, 2], 16)).toEqual([
      [-1, 4, 6, 7],
      [1, 2, 6, 7],
    ]);
  });
});

describe('fourNumberSumUsingHashTable()', () => {
  it('should return an array of four numbers that add up to a target sum', () => {
    expect(fourNumberSumUsingHashTable([7, 6, 4, -1, 1, 2], 16)).toEqual([
      [7, 6, 4, -1],
      [7, 6, 1, 2],
    ]);
  });
});
