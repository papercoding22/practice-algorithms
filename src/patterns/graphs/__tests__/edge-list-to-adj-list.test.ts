import { covertEdgeListToAdjList } from '../edge-list-to-adj-list';

describe('convertEdgeListToAdjacencyList', () => {
  it('should convert an edge list to an adjacency list', () => {
    const edgeList = [
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 3],
    ];

    const expectedAdjacencyList = {
      0: [1, 2],
      1: [0, 2],
      2: [0, 1, 3],
      3: [2],
    };

    expect(covertEdgeListToAdjList(edgeList)).toEqual(expectedAdjacencyList);
  });

  it('should handle an empty edge list', () => {
    const edgeList: number[][] = [];
    const expectedAdjacencyList: Record<number, number[]> = {};

    expect(covertEdgeListToAdjList(edgeList)).toEqual(expectedAdjacencyList);
  });
});
