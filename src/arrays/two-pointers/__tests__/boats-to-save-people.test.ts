import { describe, it, expect } from 'vitest';
import { numRescueBoats } from '../boats-to-save-people';

const testCases = [
  { people: [1, 2], limit: 3, expected: 1 },
  { people: [3, 2, 2, 1], limit: 3, expected: 3 },
];

describe('numRescueBoats()', () => {
  testCases.forEach(test => {
    it(`returns minimum number of boats required to save all people`, () => {
      expect(numRescueBoats(test.people, test.limit)).toEqual(test.expected);
    });
  });
});
