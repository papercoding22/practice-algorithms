/**
 * Description:
 * - You are given an m x n integer matrix heights representing the height of each unit cell in a continent.
 * * - The Pacific Ocean touches the left and top edges of the matrix and the Atlantic Ocean touches the right and bottom edges.
 * * - Water can only flow in four directions (up, down, left, right) from a cell to another one with an equal or lower height.
 * * - Return a 2D list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.
 * * Example:
 * *   Input: heights = [[1,2,3],[8,9,4],[7,6,5]]
 * *   Output: [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]]
 * * Constraints:
 * * - m == heights.length
 * * - n == heights[i].length
 * * - 1 <= m, n <= 200
 * * - 0 <= heights[i][j] <= 10^5
 * * @param heights - A 2D array representing the heights of each cell in the matrix.
 * * @returns A 2D array of coordinates where water can flow to both the Pacific and Atlantic oceans.
 */

function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const columns = heights[0].length;
  const pacific: boolean[][] = Array.from(
    {
      length: heights.length,
    },
    () => Array(heights[0].length).fill(false),
  );
  const atlantic: boolean[][] = Array.from(
    {
      length: heights.length,
    },
    () => Array(heights[0].length).fill(false),
  );
  const result: number[][] = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(r: number, c: number, visited: boolean[][], prevHeight: number) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      visited[r][c] ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    visited[r][c] = true;

    for (const [dx, dy] of directions) {
      const nr = r + dx;
      const nc = c + dy;
      dfs(nr, nc, visited, heights[r][c]);
    }
  }

  // flow the water of the Pacific Ocean left and top from the top left cell,
  // and from the right and bottom of Atlantic Ocean
  for (let c = 0; c < columns; c++) {
    dfs(0, c, pacific, heights[0][c]);
    dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
  }

  // flow the next row
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights[r][0]);
    dfs(r, columns - 1, atlantic, heights[r][columns - 1]);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
}

export { pacificAtlantic };
