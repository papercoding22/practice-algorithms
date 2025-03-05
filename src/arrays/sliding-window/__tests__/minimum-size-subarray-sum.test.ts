import { describe } from 'node:test';
import { minSubArrayLen } from '../minimum-size-subarray-sum';

describe('minSubArrayLen', () => {
  const testCases = [
    {
      input: [7, [2, 3, 1, 2, 4, 3]],
      output: 2,
    },
    {
      input: [4, [1, 4, 4]],
      output: 1,
    },
    {
      input: [11, [1, 1, 1, 1, 1, 1, 1, 1]],
      output: 0,
    },
  ];

  testCases.forEach(({ input, output }) => {
    it(`should return ${output} for target ${input[0]} and nums ${input[1]}`, () => {
      expect(minSubArrayLen(input[0], input[1])).toBe(output);
    });
  });
});
