import { describe, it, expect } from 'vitest';
import { canCompleteCircuit } from '../gas-station';

// Problem: Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

describe('canCompleteCircuit', () => {
  it('returns the correct starting index for a valid circuit', () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  });

  it('returns -1 when it is impossible to complete the circuit', () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  });

  it('returns 0 when starting at index 0 is possible', () => {
    expect(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])).toBe(4);
  });

  it('returns -1 for empty arrays', () => {
    expect(canCompleteCircuit([], [])).toBe(-1);
  });

  it('returns 0 when only one station and enough gas', () => {
    expect(canCompleteCircuit([5], [4])).toBe(0);
  });

  it('returns -1 when only one station and not enough gas', () => {
    expect(canCompleteCircuit([1], [2])).toBe(-1);
  });

  it('returns correct index for all stations with equal gas and cost', () => {
    expect(canCompleteCircuit([2, 2, 2], [2, 2, 2])).toBe(0);
  });
});
