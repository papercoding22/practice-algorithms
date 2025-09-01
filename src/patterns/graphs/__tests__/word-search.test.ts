import { exist } from '../word-search';

describe('Word Search', () => {
  it('should return true for a simple case', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCCED';
    expect(exist(board, word)).toBe(true);
  });
  it('should return true for another valid word', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'SEE';
    expect(exist(board, word)).toBe(true);
  });

  it('should return false for a word that does not exist', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    const word = 'ABCB';
    expect(exist(board, word)).toBe(false);
  });

  it('should return false if the word is longer than the total cells', () => {
    const board = [
      ['A', 'B'],
      ['C', 'D'],
    ];
    const word = 'ABCDE';
    expect(exist(board, word)).toBe(false);
  });

  it('should return true for a single letter word present in the board', () => {
    const board = [
      ['A', 'B'],
      ['C', 'D'],
    ];
    const word = 'C';
    expect(exist(board, word)).toBe(true);
  });

  it('should return false for a single letter word not present in the board', () => {
    const board = [
      ['A', 'B'],
      ['C', 'D'],
    ];
    const word = 'E';
    expect(exist(board, word)).toBe(false);
  });

  it('should return true for a word that uses all cells', () => {
    const board = [
      ['A', 'B'],
      ['D', 'C'],
    ];
    const word = 'ABCD';
    expect(exist(board, word)).toBe(true);
  });

  it('should return false if the word requires revisiting a cell', () => {
    const board = [
      ['A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'B'],
    ];
    const word = 'AAAAAAAAAAAAAAB';
    expect(exist(board, word)).toBe(true);
  });
});
