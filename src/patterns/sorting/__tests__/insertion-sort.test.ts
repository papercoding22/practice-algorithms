import { describe, it, expect } from 'vitest';
import { insertionSort } from '../insertion-sort';

describe('insertionSort()', () => {
  it('should return an empty array when given an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  it('should return the same array when given an array with one element', () => {
    expect(insertionSort([5])).toEqual([5]);
  });

  it('should sort an unsorted array of positive numbers', () => {
    const arr = [5, 1, 4, 2, 8];
    expect(insertionSort(arr)).toEqual([1, 2, 4, 5, 8]);
  });

  it('should sort an array with negative numbers', () => {
    const arr = [-6, 20, 8, -2, 4];
    expect(insertionSort(arr)).toEqual([-6, -2, 4, 8, 20]);
  });

  it('should sort an array that is already sorted', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reverse-sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate values', () => {
    const arr = [5, 1, 4, 2, 8, 1, 5];
    expect(insertionSort(arr)).toEqual([1, 1, 2, 4, 5, 5, 8]);
  });

  it('should handle an array with all identical elements', () => {
    const arr = [3, 3, 3, 3, 3];
    expect(insertionSort(arr)).toEqual([3, 3, 3, 3, 3]);
  });

  it('should sort an array with mixed positive and negative numbers', () => {
    const arr = [3, -1, 0, -5, 2, 10];
    expect(insertionSort(arr)).toEqual([-5, -1, 0, 2, 3, 10]);
  });

  it('should handle a two-element array in wrong order', () => {
    const arr = [2, 1];
    expect(insertionSort(arr)).toEqual([1, 2]);
  });

  it('should handle a large array efficiently', () => {
    const arr = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50, 22, 33];
    expect(insertionSort(arr)).toEqual([
      11, 12, 22, 22, 25, 33, 34, 45, 50, 64, 88, 90,
    ]);
  });

  it('should handle an array with zero values', () => {
    const arr = [0, -5, 0, 3, 0, -2];
    expect(insertionSort(arr)).toEqual([-5, -2, 0, 0, 0, 3]);
  });
});
