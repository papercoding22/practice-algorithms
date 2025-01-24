import { captureForts } from '../max-enemy-forts-captured';

const testCases = [
  {
    forts: [1, 0, 0, -1, 0, 0, 0, 0, 1],
    expected: 4,
  },
  {
    forts: [1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    expected: 4,
  },
  {
    forts: [1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    expected: 4,
  },
  {
    forts: [1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    expected: 4,
  },
  {
    forts: [1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    expected: 4,
  },
  {
    forts: [
      1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    ],
    expected: 4,
  },
];

describe('captureForts', () => {
  testCases.forEach(({ forts, expected }, index) => {
    it(`should return the maximum number of forts that can be captured for test case ${index}`, () => {
      expect(captureForts(forts)).toBe(expected);
    });
  });
});
