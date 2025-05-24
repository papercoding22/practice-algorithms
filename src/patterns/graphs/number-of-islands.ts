/**
 * Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 */

function numIslands(grid: string[][]): number {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (r: number, c: number): void => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
      return;
    }
    grid[r][c] = '0'; // Mark the land as visited
    // Explore all four directions
    dfs(r + 1, c); // Down
    dfs(r - 1, c); // Up
    dfs(r, c + 1); // Right
    dfs(r, c - 1); // Left
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        // Found an island
        count++;
        dfs(r, c); // Perform DFS to mark the entire island
      }
    }
  }

  return count;
}

export { numIslands };
