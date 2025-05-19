function covertEdgeListToAdjList(edgeList: number[][]) {
  const adjList: Record<number, number[]> = {};
  for (const [from, to] of edgeList) {
    if (!adjList[from]) adjList[from] = [];
    if (!adjList[to]) adjList[to] = [];

    adjList[from].push(to);
    adjList[to].push(from); // Omit this line if the graph is directed
  }

  return adjList;
}

export { covertEdgeListToAdjList };
