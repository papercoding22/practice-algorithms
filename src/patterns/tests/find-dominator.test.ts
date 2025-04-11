import { describe, it, expect } from 'vitest';
import { findDominator } from '../find-dominator';

describe('findDominator', () => {
  it('should return the dominator of the array', () => {
    expect(findDominator([3, 2, 3])).toBe(3);
    expect(findDominator([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    expect(findDominator([1, 2, 3, 4, 5])).toBe(-1);
    expect(findDominator([3, 4, 3, 2, 3, -1, 3, 3])).toBe(3);
  });
});
