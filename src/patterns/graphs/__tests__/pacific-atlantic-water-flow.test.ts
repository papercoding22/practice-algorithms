import { pacificAtlantic } from '../pacific-atlantic-water-flow';
import { describe, it, expect } from 'vitest';

describe('pacificAtlantic', () => {
  it('should handle a single cell', () => {
    const heights = [[42]];
    const output = pacificAtlantic(heights);
    expect(output).toEqual([[0, 0]]);
  });

  it('should handle a 2x2 grid with equal heights', () => {
    const heights = [
      [1, 1],
      [1, 1],
    ];
    const output = pacificAtlantic(heights);
    const expected = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ];
    expect(output.sort().toString()).toBe(expected.sort().toString());
  });

  it('should handle a grid where only corners can reach both oceans', () => {
    const heights = [
      [10, 1, 10],
      [1, 1, 1],
      [10, 1, 10],
    ];
    const output = pacificAtlantic(heights);
    const expected = [
      [0, 0],
      [0, 2],
      [2, 0],
      [2, 2],
      [0, 1],
      [1, 0],
      [1, 2],
      [2, 1],
      [1, 1],
    ];
    expect(output.sort().toString()).toBe(expected.sort().toString());
  });

  it('should handle a grid with increasing heights from top-left to bottom-right', () => {
    const heights = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ];
    const output = pacificAtlantic(heights);
    const expected = [
      [0, 2],
      [1, 2],
      [2, 2],
      [2, 1],
      [2, 0],
    ];
    expect(output.sort().toString()).toBe(expected.sort().toString());
  });

  it('should handle a grid with decreasing heights from top-left to bottom-right', () => {
    const heights = [
      [5, 4, 3],
      [4, 3, 2],
      [3, 2, 1],
    ];
    const output = pacificAtlantic(heights);
    const expected = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [2, 0],
    ];
    expect(output.sort().toString()).toBe(expected.sort().toString());
  });
});
