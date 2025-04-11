import { removeElement } from '../remove-element';

const testCases = [
  [[3, 2, 2, 3], 3, 2],
  [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5],
  [[1], 1, 0],
  [[1, 1, 1, 1], 1, 0],
  [[1, 1, 1, 1], 2, 4],
  [[], 1, 0],
];

describe('removeElement', () => {
  testCases.map((testCase, idx) => {
    it(`should return the number of elements in nums which are not equal to val - case ${idx}`, () => {
      const [nums, val, expected] = testCase;
      expect(removeElement(nums, val)).toBe(expected);
    });
  });
});
