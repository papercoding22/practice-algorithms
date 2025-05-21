function recursive_dfs_adj_list(
  graph: Map<number, number[]>,
  node: number,
  visited: boolean[],
): void {
  visited[node] = true;
  console.log(node);

  for (const neighbor of graph.get(node) || []) {
    if (!visited[neighbor]) {
      recursive_dfs_adj_list(graph, neighbor, visited);
    }
    if (visited[neighbor]) {
      console.log(`Already visited: ${neighbor}`);
    }
  }
}

export { recursive_dfs_adj_list };
