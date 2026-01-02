import { describe, it, expect } from 'vitest';
import { numRescueBoats } from '../boats-to-save-people';

describe('numRescueBoats()', () => {
  it('should pair lightest and heaviest when they fit together', () => {
    expect(numRescueBoats([1, 2], 3)).toBe(1);
  });

  it('should handle case where no pairing is possible', () => {
    expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
  });

  it('should handle single person', () => {
    expect(numRescueBoats([5], 5)).toBe(1);
  });

  it('should handle everyone at weight limit', () => {
    expect(numRescueBoats([5, 5, 5, 5], 5)).toBe(4);
  });

  it('should handle all pairs fitting perfectly', () => {
    expect(numRescueBoats([1, 2, 3, 4], 5)).toBe(2);
  });

  it('should handle large weight differences', () => {
    expect(numRescueBoats([1, 1, 1, 5, 5, 5], 6)).toBe(3);
  });

  it('should handle unsorted input', () => {
    expect(numRescueBoats([5, 1, 4, 2], 6)).toBe(2);
  });

  it('should handle minimum input with two people at limit', () => {
    expect(numRescueBoats([3, 3], 6)).toBe(1);
  });

  it('should handle complex pairing scenario', () => {
    expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4);
  });

  it('should optimize boat usage with mixed weights', () => {
    expect(numRescueBoats([2, 2, 2, 2, 2], 4)).toBe(3);
  });

  it('should handle edge case with many light people', () => {
    expect(numRescueBoats([1, 1, 1, 1, 1, 1], 5)).toBe(3);
  });

  it('should handle large limit allowing any pair', () => {
    expect(numRescueBoats([1, 2, 3, 4, 5], 100)).toBe(3);
  });
});
