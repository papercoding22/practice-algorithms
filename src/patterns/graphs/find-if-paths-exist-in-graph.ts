/**
 * Description:
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 */

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);
  // Step 1: Build adjacency list
  // Ex: 0 -> 1 and 0 -> 2 => The array of 0 is [1, 2]
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // Step 2: DFS Traversal
  const visited = new Array(n).fill(false);
  function dfs(node: number) {
    if (node === destination) return true;
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        if (dfs(neighbor)) return true;
      }
    }
    return false;
  }

  return dfs(source);
}

export { validPath };
