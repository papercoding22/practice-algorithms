import { findExitPathAssassin } from '../find-exit-path-assassin';
import { describe, it, expect } from 'vitest';

describe('findExitPathAssassin', () => {
  it('should return true for a valid path', () => {
    const grid = ['....Xv', 'AX..^', '.XX..'];
    expect(findExitPathAssassin(grid)).toBe(true);
  });
});
