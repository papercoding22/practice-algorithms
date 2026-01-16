import { describe, it, expect } from 'vitest';
import { bubbleSort } from '../bubble-sort';

describe('bubbleSort', () => {
  it('should return an empty array when given an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should return the same array when given an array with one element', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('should sort an unsorted array of positive numbers', () => {
    const arr = [5, 1, 4, 2, 8];
    expect(bubbleSort(arr)).toEqual([1, 2, 4, 5, 8]);
  });

  it('should sort an array with negative numbers', () => {
    const arr = [-6, 20, 8, -2, 4];
    expect(bubbleSort(arr)).toEqual([-6, -2, 4, 8, 20]);
  });

  it('should sort an array that is already sorted', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reverse-sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate values', () => {
    const arr = [5, 1, 4, 2, 8, 1, 5];
    expect(bubbleSort(arr)).toEqual([1, 1, 2, 4, 5, 5, 8]);
  });
});
