/**
 * Word Search
 * Link: https://leetcode.com/problems/word-search/
 * Description:
 * - Given an m x n grid of characters board and a string word,
 * - return true if word exists in the grid.
 * - The word can be constructed from letters of sequentially adjacent cells,
 * - where adjacent cells are horizontally or vertically neighboring.
 * - The same letter cell may note be used more than once.
 * - You may assume that all inputs are consist of lowercase English letters.
 * Example:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: false
 * Explanation: The word "ABCCED" does not exist in the grid.
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * Explanation: The word "ABCCED" exists in the grid.
 * Constraints:
 * - m == board.length
 * - n == board[i].length
 * - 1 <= m, n <= 6
 * - 1 <= word.length <= 15
 * - board and word consists of only lowercase English letters.
 */

function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false),
  );
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  // Using the dfs
  function dfs(r: number, c: number, index: number) {
    if (index === word.length) return true;

    const letter = word[index];

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      board[r][c] !== letter ||
      visited[r][c]
    ) {
      return false;
    }

    // if it is a valid cell, we need to mark it as visited
    visited[r][c] = true;

    for (const [dx, dy] of directions) {
      const nr = r + dx;
      const nc = c + dy;
      if (dfs(nr, nc, index + 1)) {
        return true;
      }
    }

    // This cell is totally invalid, we cannot move any further.
    // Before we go back to the prev cell, restore its visited flag.
    // Because we might need to visit it if we go with other ways.
    visited[r][c] = false;

    // Return false to find another first letter in the board
    return false;
  }

  // The first problem we have to solve
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // We just go cell-by-cell from the first cell in the board
      // If that cell cannot go further, we move to the next cell,
      // until we reach the last cell of the board
      // if it is still false, exit the loop and return false.
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

// During the time I was solving this problem, I was asking myself what is the simplest problem that I need to solve first.
// The answer is how I can find the cells which are containing the first letter of the given word. For example: word = "ABC", finding the cells having letter "A"
// Obviously, we have to loop through the board until it reaches the cell having the letter A and start from there.
// Next, we develop the follow-up question from this point until we have a full solution for the problem.
// My next question would be how can we check its neighbors, up, down, left, right if any of them is matched to the next letter in the word.

export { exist };
