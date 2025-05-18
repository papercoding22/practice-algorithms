import UndirectedAdjacencyList from '../UndirectedAdjacencyList';

describe('UndirectedAdjacencyList', () => {
  let graph: UndirectedAdjacencyList;

  beforeEach(() => {
    graph = new UndirectedAdjacencyList();
  });

  test('should add nodes and edges correctly', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');

    expect(graph.getNeighbors('A')).toEqual(['B']);
    expect(graph.getNeighbors('B')).toEqual(['A']);
  });

  test('should handle adding the same node multiple times', () => {
    graph.addNode('A');
    graph.addNode('A'); // Adding the same node again

    expect(graph.getNeighbors('A')).toEqual([]);
  });

  test('should handle adding edges between existing nodes', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C'); // Adding an edge to a new node

    expect(graph.getNeighbors('A')).toEqual(['B', 'C']);
    expect(graph.getNeighbors('B')).toEqual(['A']);
  });
});
