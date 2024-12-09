import { describe, it, expect, afterEach } from 'vitest';
import { findCelebrity, party } from '../find-the-celebrity';

describe('findCelebrity', () => {
  afterEach(() => {
    party.setMatrix([]);
  });

  it('should return the celebrity', () => {
    const n = 3;
    party.setMatrix([
      [1, 1, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
    const result = findCelebrity(n);
    expect(result).toBe(1);
  });

  it('should return -1 if there is no celebrity', () => {
    const n = 3;
    party.setMatrix([
      [1, 0, 1],
      [1, 1, 0],
      [0, 1, 1],
    ]);
    const result = findCelebrity(n);
    expect(result).toBe(-1);
  });
});
