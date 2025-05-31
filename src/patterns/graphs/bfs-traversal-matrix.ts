function bfs_matrix(grid: number[][], startRow: number, startCol: number) {
  const rows = grid.length;
  const columns = grid[0].length;
  const directions = [
    [0, 1], // go right
    [0, -1], // go left
    [-1, 0],
    [1, 0], // go up // go down
  ];

  const visited = Array.from({ length: columns }, () =>
    Array(rows).fill(false),
  );

  const queue = [[startRow, startCol]];

  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const currentCell = queue.shift();
    if (!currentCell) continue;
    const [row, col] = currentCell;
    console.log(`Visiting ${row}, ${col}`);
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < columns &&
        !visited[newRow][newCol] &&
        grid[newRow][newCol] === 1
      ) {
        queue.push([newRow, newCol]);
        visited[newRow][newCol] = true;
      }
    }
  }
}

export { bfs_matrix };
