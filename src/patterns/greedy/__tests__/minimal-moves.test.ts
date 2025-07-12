import { minimalMoves } from '../minimal-moves';
import { describe, expect, it } from 'vitest';

describe('minimalMoves', () => {
  it('should return the minimal moves for the given array', () => {
    expect(minimalMoves([1, 1, 3, 4, 4, 4])).toBe(3);
    expect(minimalMoves([2, 2, 2, 3, 3])).toBe(2);
    expect(minimalMoves([1, 2, 2, 3])).toBe(1);
    expect(minimalMoves([5, 5, 5, 5])).toBe(1);
    expect(minimalMoves([])).toBe(0);
    expect(minimalMoves([1])).toBe(0);
    expect(minimalMoves([1, 2])).toBe(1);
    expect(minimalMoves([1, 1, 1, 2])).toBe(3);
    expect(minimalMoves([3, 3, 3, 4])).toBe(1);
    expect(minimalMoves([4, 4, 4, 4])).toBe(0);
    expect(minimalMoves([1, 2, 2, 2, 5, 5, 5, 8])).toBe(4);
    expect(minimalMoves([10, 10, 10])).toBe(3);
  });
});
