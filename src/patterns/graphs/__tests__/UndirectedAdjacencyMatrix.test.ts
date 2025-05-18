import UndirectedAdjacencyMatrix from '../UndirectedAdjacencyMatrix';
import { describe, expect, it } from 'vitest';

describe('UndirectedAdjacencyMatrix', () => {
  it('should create an adjacency matrix of the specified size', () => {
    const size = 5;
    const matrix = new UndirectedAdjacencyMatrix(size);
    expect(matrix).toBeInstanceOf(UndirectedAdjacencyMatrix);
  });

  it('should add an edge between two nodes', () => {
    const size = 5;
    const matrix = new UndirectedAdjacencyMatrix(size);
    matrix.addEdge(0, 1);
    expect(matrix.hasEdge(0, 1)).toBe(true);
    expect(matrix.hasEdge(1, 0)).toBe(true);
  });

  it('should throw an error for invalid node indices', () => {
    const size = 5;
    const matrix = new UndirectedAdjacencyMatrix(size);
    expect(() => matrix.addEdge(0, 5)).toThrow('Invalid node index');
    expect(() => matrix.addEdge(-1, 2)).toThrow('Invalid node index');
  });

  it('should check if an edge exists between two nodes', () => {
    const size = 5;
    const matrix = new UndirectedAdjacencyMatrix(size);
    matrix.addEdge(0, 1);
    expect(matrix.hasEdge(0, 1)).toBe(true);
    expect(matrix.hasEdge(1, 0)).toBe(true);
    expect(matrix.hasEdge(1, 2)).toBe(false);
  });
});
