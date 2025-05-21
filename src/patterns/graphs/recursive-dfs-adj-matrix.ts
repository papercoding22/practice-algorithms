function recursive_dfs_adj_matrix(
  graph: number[][],
  node: number,
  visited: boolean[],
): void {
  if (visited[node]) {
    console.log(`Already visited: ${node}`);
    return;
  }
  visited[node] = true;

  console.log('Visited: ', node);

  for (const [neighbor, isConnected] of graph[node].entries()) {
    if (isConnected === 1 && !visited[neighbor]) {
      recursive_dfs_adj_matrix(graph, neighbor, visited);
    }
  }
}

export { recursive_dfs_adj_matrix };
