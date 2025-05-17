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

  test('should print the graph correctly', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');

    console.log = jest.fn();
    graph.printGraph();

    expect(console.log).toHaveBeenCalledWith('A → B');
    expect(console.log).toHaveBeenCalledWith('B → ');
  });
});
