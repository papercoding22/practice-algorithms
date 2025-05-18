import DirectedAdjacencyList from '../DirectedAdjacencyList';

describe('DirectedAdjacencyList', () => {
  let graph: DirectedAdjacencyList;

  beforeEach(() => {
    graph = new DirectedAdjacencyList();
  });

  test('should add nodes and edges correctly', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');

    expect(graph.getNeighbors('A')).toEqual(['B']);
    expect(graph.getNeighbors('B')).toEqual([]);
  });
});
