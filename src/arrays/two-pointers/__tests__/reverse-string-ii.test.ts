import { reverseStr } from '../reverse-string-ii';

describe('reverseStr', () => {
  const testCases = [
    {
      s: 'abcdefg',
      k: 2,
      expected: 'bacdfeg',
    },
    {
      s: 'abcd',
      k: 2,
      expected: 'bacd',
    },
    {
      s: 'abcdefg',
      k: 8,
      expected: 'gfedcba',
    },
  ];

  testCases.forEach(({ s, k, expected }) => {
    it(`should reverse the first k characters for every 2k characters in ${s} and return ${expected}`, () => {
      expect(reverseStr(s, k)).toBe(expected);
    });
  });
});
