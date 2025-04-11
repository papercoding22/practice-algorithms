import { describe, expect, it } from 'vitest';
import { triangleNumber } from '../valid-triangle-number';

const testCases = [
  {
    nums: [2, 2, 3, 4],
    expected: 3,
  },
  {
    nums: [4, 2, 3, 4],
    expected: 4,
  },
];

describe('triangleNumber()', () => {
  testCases.forEach(test => {
    it(`returns the number of triplets that form a triangle`, () => {
      expect(triangleNumber(test.nums)).toEqual(test.expected);
    });
  });
});
