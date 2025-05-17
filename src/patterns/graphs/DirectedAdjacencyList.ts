class DirectedAdjacencyList {
  private adjacencyList: Map<string, string[]>;

  constructor() {
    this.adjacencyList = new Map<string, string[]>();
  }

  addNode(node: string): void {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(from: string, to: string): void {
    this.addNode(from);
    this.addNode(to);
    this.adjacencyList.get(from)!.push(to);
  }

  printGraph(): void {
    for (const [node, neighbors] of this.adjacencyList) {
      console.log(`${node} → ${neighbors.join(', ')}`);
    }
  }

  getNeighbors(node: string): string[] {
    return this.adjacencyList.get(node) ?? [];
  }
}

export default DirectedAdjacencyList;
