import { describe, it, expect } from 'vitest';
import { singleNumberUsingSet, singleNumberBitwise } from '../single-number';

describe('Single Number', () => {
  describe('Using Bitwise XOR', () => {
    it('should return the single number', () => {
      const nums = [2, 2, 1];
      const expected = 1;
      const result = singleNumberBitwise(nums);
      expect(result).toBe(expected);
    });

    it('should return the single number', () => {
      const nums = [4, 1, 2, 1, 2];
      const expected = 4;
      const result = singleNumberBitwise(nums);
      expect(result).toBe(expected);
    });

    it('should return the single number', () => {
      const nums = [1];
      const expected = 1;
      const result = singleNumberBitwise(nums);
      expect(result).toBe(expected);
    });
  });

  describe('Using Set', () => {
    it('should return the single number', () => {
      const nums = [2, 2, 1];
      const expected = 1;
      const result = singleNumberUsingSet(nums);
      expect(result).toBe(expected);
    });

    it('should return the single number', () => {
      const nums = [4, 1, 2, 1, 2];
      const expected = 4;
      const result = singleNumberUsingSet(nums);
      expect(result).toBe(expected);
    });

    it('should return the single number', () => {
      const nums = [1];
      const expected = 1;
      const result = singleNumberUsingSet(nums);
      expect(result).toBe(expected);
    });
  });
});
