/**
 * Link: https://leetcode.com/problems/boats-to-save-people/
 * Pattern: Two Pointers
 * Recognition:
 * - Find the pair of people that can share a boat.
 * - Sort the people by weight to maximize the number of pairs.
 * - Use two pointers to find the heaviest and lightest person that can share a boat.
 */
function numRescueBoats(people: number[], limit: number): number {
  // Sort people by weight in ascending order
  people.sort((a, b) => a - b);

  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  // Use two pointers to try pairing heaviest with lightest
  while (left <= right) {
    // Check if we can fit both current lightest and heaviest person
    if (left < right && people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }

  return boats;
}

export { numRescueBoats };
