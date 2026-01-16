import { describe, it, expect } from 'vitest';
import { selectionSort } from '../selection-sort';

describe('selectionSort()', () => {
  it('should handle an empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });

  it('should handle a single element array', () => {
    expect(selectionSort([42])).toEqual([42]);
  });

  it('should handle an already sorted array', () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a reverse sorted array', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an unsorted array', () => {
    expect(selectionSort([64, 34, 25, 12, 22, 11, 90])).toEqual([
      11, 12, 22, 25, 34, 64, 90,
    ]);
  });

  it('should handle an array with duplicate values', () => {
    expect(selectionSort([5, 2, 8, 2, 9, 1, 5])).toEqual([1, 2, 2, 5, 5, 8, 9]);
  });

  it('should handle an array with all identical elements', () => {
    expect(selectionSort([7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7]);
  });

  it('should handle an array with negative numbers', () => {
    expect(selectionSort([-5, 3, -1, 7, -9, 2])).toEqual([-9, -5, -1, 2, 3, 7]);
  });

  it('should handle an array with mix of positive, negative, and zero', () => {
    expect(selectionSort([0, -3, 5, -1, 0, 8])).toEqual([-3, -1, 0, 0, 5, 8]);
  });

  it('should handle a large array', () => {
    const input = [100, 45, 23, 78, 12, 90, 56, 34, 67, 89, 1, 50];
    const expected = [1, 12, 23, 34, 45, 50, 56, 67, 78, 89, 90, 100];
    expect(selectionSort(input)).toEqual(expected);
  });

  it('should handle an array with two elements in wrong order', () => {
    expect(selectionSort([2, 1])).toEqual([1, 2]);
  });

  it('should handle an array with two elements in correct order', () => {
    expect(selectionSort([1, 2])).toEqual([1, 2]);
  });

  it('should handle floating point numbers', () => {
    expect(selectionSort([3.5, 1.2, 4.8, 2.1])).toEqual([1.2, 2.1, 3.5, 4.8]);
  });

  it('should sort an array with extreme values', () => {
    expect(
      selectionSort([Number.MAX_SAFE_INTEGER, 0, Number.MIN_SAFE_INTEGER]),
    ).toEqual([Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER]);
  });
});
