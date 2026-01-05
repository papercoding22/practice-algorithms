/**
 * You are given a 0-indexed integer array, `forts`, which represents the layout of a battlefield.
 * The array contains three types of values:
 * - `1`: Represents a fort that you control.
 * - `-1`: Represents an enemy fort.
 * - `0`: Represents an empty, unfortified position.
 *
 * Your task is to determine the maximum number of enemy forts you can capture in a single move.
 * A move consists of sending an army from one of your forts to an enemy fort.
 *
 * The rule for a valid move is that the path between your fort (`1`) and the enemy fort (`-1`)
 * must be clear of any other forts. In other words, all positions between your starting fort
 * and the target enemy fort must be empty (`0`).
 *
 * The number of forts captured in a move is defined as the number of empty positions (`0`s)
 * between your fort and the enemy fort.
 *
 * @param forts - An array of numbers representing the battlefield.
 * @returns The maximum number of forts that can be captured in a single valid move.
 * If no valid moves are possible, return 0.
 *
 * @example
 * // For forts = [1, 0, 0, -1, 0, 1], the breakdown is as follows:
 * // - Move from fort at index 0 to enemy at index 3: The path is [0, 0], length 2.
 * // - Other moves are not possible as there are no clear paths.
 * // The max capture is 2.
 * captureForts([1, 0, 0, -1, 0, 1]) // returns 2
 *
 * @example
 * // For forts = [0, 0, 1, -1], the path from index 2 to 3 is empty, length 0.
 * captureForts([0, 0, 1, -1]) // returns 0
 */
function captureForts(forts: number[]): number {
  let maxCaptures = 0;
  const n = forts.length;

  for (let i = 0; i < n; i++) {
    if (forts[i] === 1) {
      // Check to the left
      let leftCaptures = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (forts[j] === -1) {
          maxCaptures = Math.max(maxCaptures, leftCaptures);
          break;
        } else if (forts[j] === 0) {
          leftCaptures++;
        } else {
          break; // Encountered another fort
        }
      }

      // Check to the right
      let rightCaptures = 0;
      for (let j = i + 1; j < n; j++) {
        if (forts[j] === -1) {
          maxCaptures = Math.max(maxCaptures, rightCaptures);
          break;
        } else if (forts[j] === 0) {
          rightCaptures++;
        } else {
          break; // Encountered another fort
        }
      }
    }
  }

  return maxCaptures;
}

export { captureForts };
