import { distinctAverages } from '../number-of-distinct';

const testCases = [
  {
    input: [4, 1, 4, 0, 3, 5],
    output: 2,
  },
  {
    input: [1, 100],
    output: 1,
  },
];

describe('Number of Distinct Averages', () => {
  testCases.forEach(test => {
    it(`input: ${test.input}`, () => {
      expect(distinctAverages(test.input)).toBe(test.output);
    });
  });
});
