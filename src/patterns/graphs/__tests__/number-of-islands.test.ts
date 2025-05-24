import { numIslands } from '../number-of-islands';

describe('Number of Islands', () => {
  it('should return the correct number of islands for a simple grid', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(grid)).toBe(1);
  });
});
