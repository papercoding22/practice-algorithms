/**
 * Determines if it's possible to escape from the top-left to the bottom-right corner of a grid.
 * The grid is represented as a 2D array where 1 indicates a wall and 0 indicates a free cell.
 * Returns false immediately if the starting cell is a wall.
 */
function canEscape(graph: Array<number[]>): boolean {
  const rows = graph.length;
  const cols = graph[0].length;
  if (graph[0][0] === 1) return false; // Return false if the first cell is a wall

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false),
  );

  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  function isValid(x: number, y: number): boolean {
    return x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y];
  }

  function dfs(x: number, y: number): boolean {
    if (x === rows - 1 && y === cols - 1) {
      return true; // Reached the bottom-right corner
    }

    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValid(newX, newY) && graph[newX][newY] !== 1) {
        if (dfs(newX, newY)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(0, 0);
}

export { canEscape };
