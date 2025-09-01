export type Graph = Record<number, number[]>;
// OR for more complex nodes:
export interface GraphNode<T> {
  value: T;
  neighbors: GraphNode<T>[];
}
