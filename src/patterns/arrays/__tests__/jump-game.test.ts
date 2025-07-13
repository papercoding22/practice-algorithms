import { describe, it, expect } from 'vitest';
import { canJump } from '../jump-game';

describe('canJump', () => {
  it('should return true for [2,3,1,1,4]', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  // it('should return false for [3,2,1,0,4]', () => {
  //   expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  // });

  // it('should return true for [0]', () => {
  //   expect(canJump([0])).toBe(true);
  // });

  // it('should return true for [2,0,0]', () => {
  //   expect(canJump([2, 0, 0])).toBe(true);
  // });

  // it('should return false for [1,0,1,0]', () => {
  //   expect(canJump([1, 0, 1, 0])).toBe(false);
  // });

  // it('should return true for [4,0,0,0,0]', () => {
  //   expect(canJump([4, 0, 0, 0, 0])).toBe(true);
  // });

  // it('should return false for [0,2,3]', () => {
  //   expect(canJump([0, 2, 3])).toBe(false);
  // });
});
