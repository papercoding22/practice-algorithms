import { describe, it, expect } from 'vitest';
import { numRescueBoats } from '../boats-to-save-people';

describe('numRescueBoats()', () => {
  it('returns minimum number of boats required to save all people', () => {
    expect(numRescueBoats([1, 2], 3)).toEqual(1);
    expect(numRescueBoats([3, 2, 2, 1], 3)).toEqual(3);
  });
});
