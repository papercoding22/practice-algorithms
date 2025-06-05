import { Graph } from './graph.types';

function bfs(
  startNode: number,
  graph: Graph,
  callback?: (node: number) => void,
) {
  const queue: number[] = [startNode];
  const visited: Set<number> = new Set();

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (visited.has(node)) continue;

    visited.add(node);
    callback?.(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

export { bfs };
