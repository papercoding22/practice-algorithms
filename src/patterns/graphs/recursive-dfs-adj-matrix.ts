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

  const connectedArray = graph[node];
  console.log('Connected Array: ', connectedArray);
  for (let i = 0; i < connectedArray.length; i++) {
    const connectedNode = i;
    const isConnected = connectedArray[i];
    if (isConnected === 1 && !visited[connectedNode]) {
      recursive_dfs_adj_matrix(graph, connectedNode, visited);
    }
  }
}

export { recursive_dfs_adj_matrix };
