/**
 * @author: Paper Coding
 * @link: https://leetcode.com/problems/find-the-celebrity/description/
 * @description: Find the Celebrity
 * - Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity.
 * - The definition of a celebrity is that all the other n - 1 people know them, but they do not know any of them.
 * - Now you want to find out who the celebrity is or verify that there is not one.
 * - You are given a helper function bool knows(a, b) which tells you whether A knows B.
 * - Implement a function int findCelebrity(n). The function should return the celebrity's label if there is a celebrity in the party. Otherwise, return -1.
 * For Example:
 * Input: graph = [[1,1,0],[0,1,0],[1,1,1]]
 * Output: 1
 */
export const party = (function partyTime() {
  const matrix = [] as number[][];

  function setMatrix(graph: number[][]) {
    for (let i = 0; i < graph.length; i++) {
      matrix.push([...graph[i]]);
    }
  }

  function knows(a: number, b: number) {
    return matrix[a][b] === 1;
  }

  return {
    setMatrix,
    knows,
  };
})();

function findCelebrity(n: number): number {
  // Let's say in the party, we have 3 people: A, B, and C.
  let candidate = 0;
  for (let i = 1; i < n; i++) {
    if (party.knows(candidate, i)) {
      // B doesn't know C, so C cannot be celeb, because if C is celeb, B must know C.
      candidate = i;
    }
  }

  // reverify to make sure that everyone knows him and he doesn't know anyone.
  for (let i = 0; i < n; i++) {
    if (i !== candidate && party.knows(candidate, i)) {
      return -1;
    }
  }

  return candidate;
}

export { findCelebrity };
