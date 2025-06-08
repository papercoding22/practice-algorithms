import { canEscape } from '../can-escape';
import { describe, it, expect } from 'vitest';

// canEscape should determine if there is a path from top-left to bottom-right in a grid
// 0 = open cell, 1 = wall

describe('canEscape', () => {
  it('should return true for a simple open path', () => {
    const graph = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    expect(canEscape(graph)).toBe(true);
  });

  it('should return false if there is no path', () => {
    const graph = [
      [0, 1, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    expect(canEscape(graph)).toBe(false);
  });

  it('should return true for a single cell grid', () => {
    const graph = [[0]];
    expect(canEscape(graph)).toBe(true);
  });

  it('should return false if start is blocked', () => {
    const graph = [
      [1, 0],
      [0, 0],
    ];
    expect(canEscape(graph)).toBe(false);
  });

  it('should return false if end is blocked', () => {
    const graph = [
      [0, 0],
      [0, 1],
    ];
    expect(canEscape(graph)).toBe(false);
  });

  it('should handle larger grids with complex paths', () => {
    const graph = [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ];
    expect(canEscape(graph)).toBe(true);
  });

  it('should return false for a grid with no open cells', () => {
    const graph = [
      [1, 1],
      [1, 1],
    ];
    expect(canEscape(graph)).toBe(false);
  });
});
