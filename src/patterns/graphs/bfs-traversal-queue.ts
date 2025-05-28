export function bfs_queue(graph: Record<string, string[]>, start: string) {
  const visited: Record<string, boolean> = {};
  const queue: string[] = [];
  visited[start] = true;
  queue.push(start);
  console.log(`Starting BFS from ${start}`);
  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue a node
    if (node === undefined) continue; // Handle case where node is undefined
    console.log(`Visiting ${node}`); // Process the node
    visited[node] = true; // Mark the node as visited
    const neighbors = graph[node] || []; // Get neighbors of the node
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        visited[neighbor] = true; // Mark neighbor as visited
        queue.push(neighbor); // Enqueue the neighbor
      }
    }
  }
  console.log('BFS traversal complete.');
}
