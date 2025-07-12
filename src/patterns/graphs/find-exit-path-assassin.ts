function findExitPathAssassin(mapString: string[]): boolean {
  const rows = mapString.length;
  const cols = mapString[0].length;

  const isSafe: boolean[][] = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(true));

  let assassinStartR = -1;
  let assassinStartC = -1;

  // Step 1: Pre-process the map to mark observed cells and find assassin
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const char = mapString[i][j];
      if (char === 'A') {
        assassinStartR = i;
        assassinStartC = j;
      } else if (char === 'X') {
        isSafe[i][j] = false; // Mark as unsafe
      } else if (char === '^' || char === 'v' || char === '<' || char === '>') {
        let newR = 0;
        let newC = 0;
        if (char === '^') {
          newR = i - 1;
        } else if (char === 'v') {
          newR = i + 1;
        }
        if (char === '<') {
          newC = j - 1;
        } else if (char === '>') {
          newC = j + 1;
        }
        let currR = i + newR;
        let currC = j + newC;

        while (currR >= 0 && currR < rows && currC >= 0 && currC < cols) {
          const cellInSight = mapString[currR][currC];
          if (
            cellInSight === 'X' ||
            cellInSight === '^' ||
            cellInSight === '<' ||
            cellInSight === 'v' ||
            cellInSight === '>'
          ) {
            // Vision is blocked by an obstacle or another guard
            break;
          }

          if (cellInSight === '.' || cellInSight === 'A') {
            isSafe[currR][currC] = false; // Mark as unsafe
          }
          currR += newR;
          currC += newC;
        }
      }
    }
  }

  // Step 2: Check if the assassin's starting position is already observed
  if (!isSafe[assassinStartR][assassinStartC]) {
    return false;
  }

  // Step 3: Perform BFS to find a path from assassin's start to the bottom-right corner
  const queue: [number, number][] = [];
  const visited: boolean[][] = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));

  // Define possible moves (up, down, left, right)
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  queue.push([assassinStartR, assassinStartC]);
  visited[assassinStartR][assassinStartC] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;

    // If we reach the bottom-right corner, return true
    if (r === rows - 1 && c === cols - 1) {
      return true;
    }

    // Explore all possible moves
    for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      // Check if the new position is within bounds and safe
      if (
        newR >= 0 &&
        newR < rows &&
        newC >= 0 &&
        newC < cols &&
        isSafe[newR][newC] &&
        !visited[newR][newC]
      ) {
        visited[newR][newC] = true;
        queue.push([newR, newC]);
      }
    }
  }

  // If we exhaust the queue without finding a path, return false
  return false;
}

export { findExitPathAssassin };
