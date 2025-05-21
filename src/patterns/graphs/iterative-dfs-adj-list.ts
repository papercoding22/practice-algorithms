function iterativeDFS_adjList(graph: Map<string, string[]>, startNode: string) {
  const visited = new Set();
  const stack = [startNode];

  while (stack.length > 0) {
    const currentNode = stack.pop() as string;

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);
    console.log('Visited: ', currentNode);

    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

export { iterativeDFS_adjList };
