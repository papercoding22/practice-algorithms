type Edge = [number, number];

class EdgeListGraph {
  private edges: Edge[] = [];

  // Add a new edge between node a and b
  addEdge(a: number, b: number): void {
    this.edges.push([a, b]);
  }

  // Check if there's an edge between a and b
  hasEdge(a: number, b: number): boolean {
    return this.edges.some(
      ([x, y]) => (x === a && y === b) || (x === b && y === a),
    );
  }

  // Print all edges in the graph
  print(): void {
    console.log('Edges:');
    for (const [a, b] of this.edges) {
      console.log(`${a} -- ${b}`);
    }
  }

  // Get all neighbors of a given node
  getNeighbors(node: number): number[] {
    const neighbors: number[] = [];
    for (const [a, b] of this.edges) {
      if (a === node) neighbors.push(b);
      else if (b === node) neighbors.push(a);
    }
    return neighbors;
  }
}

export default EdgeListGraph;
