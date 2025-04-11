import { lengthOfLongestSubstring } from '../longest-substring-without-repeating-characters';

const testCases = [
  {
    input: 'abcabcbb',
    output: 3,
  },
  {
    input: 'bbbbb',
    output: 1,
  },
  {
    input: 'pwwkew',
    output: 3,
  },
];

describe('lengthOfLongestSubstring', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(lengthOfLongestSubstring(t.input)).toEqual(t.output);
    });
  });
});
