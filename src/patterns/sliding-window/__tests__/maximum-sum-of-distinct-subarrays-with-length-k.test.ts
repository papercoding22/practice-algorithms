import { maximumSubarraySum } from '../maximum-sum-of-distinct-subarrays-with-length-k';

describe('maximumSubarraySum', () => {
  const testCases = [
    {
      input: {
        nums: [1, 5, 4, 2, 9, 9, 9],
        k: 3,
      },
      output: 15,
    },
    {
      input: {
        nums: [1, 2, 3, 4, 5],
        k: 2,
      },
      output: 9,
    },
    {
      input: {
        nums: [1, 2, 3, 4, 5],
        k: 3,
      },
      output: 12,
    },
    {
      input: {
        nums: [1, 2, 3, 4, 5],
        k: 4,
      },
      output: 14,
    },
  ];

  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(maximumSubarraySum(t.input.nums, t.input.k)).toEqual(t.output);
    });
  });
});
