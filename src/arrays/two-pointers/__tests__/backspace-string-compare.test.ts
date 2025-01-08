import { describe, it, expect } from 'vitest';
import { backspaceCompare } from '../backspace-string-compare';
import { backspaceCompareStack } from '../backspace-string-compare-stack';

describe('Backspace String Compare', () => {
  // Create some test cases and use it each
  const testCases = [
    { s: 'ab#c', t: 'ad#c', expected: true },
    { s: 'ab##', t: 'c#d#', expected: true },
    { s: 'a##c', t: '#a#c', expected: true },
    { s: 'a#c', t: 'b', expected: false },
    { s: 'xywrrmp', t: 'xywrrmu#p', expected: true },
    { s: 'bbbextm', t: 'bbb#extm', expected: false },
  ];

  testCases.forEach((testCase, i) => {
    it(`should return ${testCase.expected} for test case ${i + 1}`, () => {
      expect(backspaceCompare(testCase.s, testCase.t)).toBe(testCase.expected);
    });
  });
});

describe('Backspace String Compare Stack', () => {
  const testCases = [
    { s: 'ab#c', t: 'ad#c', expected: true },
    { s: 'ab##', t: 'c#d#', expected: true },
    { s: 'a##c', t: '#a#c', expected: true },
    { s: 'a#c', t: 'b', expected: false },
    { s: 'xywrrmp', t: 'xywrrmu#p', expected: true },
    { s: 'bbbextm', t: 'bbb#extm', expected: false },
  ];

  testCases.forEach((testCases, i) => {
    it(`should return ${testCases.expected} for test case ${i + 1}`, () => {
      expect(backspaceCompareStack(testCases.s, testCases.t)).toBe(
        testCases.expected,
      );
    });
  });
});
