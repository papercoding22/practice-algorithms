import { Graph } from './graph.types';

function dfsRecursive(
  node: number,
  graph: Graph,
  visited: Set<number> = new Set(),
  callback?: (node: number) => void,
) {
  if (visited.has(node)) return;

  visited.add(node);

  callback?.(node);

  for (const neighbor of graph[node] || []) {
    dfsRecursive(neighbor, graph, visited, callback);
  }
}

function dfsIterative(
  startNode: number,
  graph: Graph,
  callback?: (node: number) => void,
) {
  const stack: number[] = [startNode];
  const visited: Set<number> = new Set();

  while (stack.length > 0) {
    const node = stack.pop()!;
    if (visited.has(node)) continue;

    visited.add(node);
    callback?.(node);

    for (let i = (graph[node] || []).length - 1; i >= 0; i--) {
      stack.push(graph[node][i]);
    }
  }
}

export { dfsRecursive, dfsIterative };
