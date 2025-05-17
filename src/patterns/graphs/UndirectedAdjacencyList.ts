class UndirectedAdjacencyList {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map<string, string[]>();
  }

  addNode(node: string): void {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(node1: string, node2: string): void {
    this.addNode(node1);
    this.addNode(node2);
    this.adjacencyList.get(node1)!.push(node2);
    this.adjacencyList.get(node2)!.push(node1);
  }

  getNeighbors(node: string): string[] {
    return this.adjacencyList.get(node) || [];
  }

  printGraph(): void {
    for (const [node, neighbors] of this.adjacencyList) {
      console.log(`${node} → ${neighbors.join(', ')}`);
    }
  }
}

export default UndirectedAdjacencyList;
