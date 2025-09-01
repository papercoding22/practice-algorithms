import { missionDayCount } from '../mission-day-count';
import { describe, expect, it } from 'vitest';

describe('missionDayCount', () => {
  it('should return 1 when all missions can be completed in one day', () => {
    expect(missionDayCount([5, 8, 2, 7], 3)).toBe(3);
  });

  it('should return the length of missions when X is 0', () => {
    expect(missionDayCount([1, 2, 3, 4], 0)).toBe(4);
  });

  it('should handle missions with large gaps', () => {
    expect(missionDayCount([1, 10, 20, 30], 5)).toBe(4);
  });

  it('should handle missions with mixed gaps', () => {
    expect(missionDayCount([1, 2, 10, 11, 20], 1)).toBe(3);
  });

  it('should handle empty missions array', () => {
    expect(missionDayCount([], 2)).toBe(0);
  });

  it('should handle single mission', () => {
    expect(missionDayCount([1, 12, 10, 4, 5, 2], 2)).toBe(4);
  });

  it('should handle two missions with diff <= X', () => {
    expect(missionDayCount([1, 2], 2)).toBe(1);
  });

  it('should handle two missions with diff > X', () => {
    expect(missionDayCount([1, 5], 2)).toBe(2);
  });

  it('should handle two missions with diff > X', () => {
    expect(missionDayCount([1, 3, 5, 7], 3)).toBe(2);
  });
});
