import { describe, it, expect } from 'vitest';
import { moveZeroes } from '../two-pointers/move-zeroes';

describe('moveZeroes', () => {
  it('should move all zeroes to the end of the array', () => {
    const input = [0, 1, 0, 3, 12];
    const output = [1, 3, 12, 0, 0];
    expect(moveZeroes(input)).toEqual(output);
  });
});
