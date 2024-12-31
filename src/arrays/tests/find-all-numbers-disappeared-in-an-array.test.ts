import { describe, expect, it } from 'vitest';
import { findDisappearedNumbers } from '../find-all-numbers-disappeared-in-an-array';

describe('findDisappearedNumbers', () => {
  it('should return [5,6] for [4,3,2,7,8,2,3,1]', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  it('should return [2] for [1,1]', () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });
});
