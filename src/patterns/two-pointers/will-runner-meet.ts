/**
 * Description: Based on the idea of Two Pointers, this function checks if two runners will meet on a circular track.
 * The function takes the length of the track, the starting positions, and the speeds of both runners.
 * It returns the time at which they will meet, or null if they never meet.
 * The function uses a while loop to simulate the movement of both runners, updating their positions based on their speeds.
 * The modulo operator is used to ensure that the positions wrap around the track length.
 * The function runs in O(n) time complexity, where n is the track length, and O(1) space complexity.
 * @param {number} trackLength - The length of the circular track.
 * @param {number} aliceStart - The starting position of Alice.
 * @param {number} aliceSpeed - The speed of Alice.
 * @param {number} bobStart - The starting position of Bob.
 * @param {number} bobSpeed - The speed of Bob.
 * @returns {number | null} - The time at which they will meet, or null if they never meet.
 * @example
 * // Example usage:
 * const trackLength = 10;
 * const aliceStart = 0;
 * const aliceSpeed = 2;
 * const bobStart = 5;
 * const bobSpeed = 3;
 * const result = willRunnersMeet(trackLength, aliceStart, aliceSpeed, bobStart, bobSpeed);
 * console.log(result); // Output: 5
 * // Explanation: Alice will meet Bob after 5 time units.
 */

function willRunnersMeet(
  trackLength: number,
  aliceStart: number,
  aliceSpeed: number,
  bobStart: number,
  bobSpeed: number,
): number | null {
  let alice = aliceStart;
  let bob = bobStart;
  let time = 0;

  while (time < trackLength * 2) {
    // Avoid infinite loops, assuming they run at most twice the track length
    if (alice === bob) return time; // They meet at this moment

    // Move Alice and Bob forward
    alice = (alice + aliceSpeed) % trackLength;
    bob = (bob + bobSpeed) % trackLength;

    time++;
  }

  return null; // They never meet
}

export { willRunnersMeet };
