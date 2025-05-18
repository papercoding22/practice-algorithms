class UndirectedAdjacencyMatrix {
  private matrix: number[][];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.matrix = Array.from(
      {
        length: size,
      },
      () => Array(size).fill(0),
    );
  }

  // Add edge between node i and node j
  addEdge(i: number, j: number): void {
    if (i >= this.size || j >= this.size || i < 0 || j < 0) {
      throw new Error('Invalid node index');
    }

    // i connects to j and j connects to i
    this.matrix[i][j] = 1;
    this.matrix[j][i] = 1;
  }

  // Check if i connects to j
  hasEdge(i: number, j: number): boolean {
    return this.matrix[i][j] === 1;
  }

  // Print adjacency matrix
  print(): void {
    console.log('Adjacency Matrix:');
    for (const row of this.matrix) {
      console.log(row.join(' '));
    }
  }
}

export default UndirectedAdjacencyMatrix;
