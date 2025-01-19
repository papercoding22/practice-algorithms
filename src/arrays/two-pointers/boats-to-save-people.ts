/**
 * Link: https://leetcode.com/problems/boats-to-save-people/
 * Pattern: Two Pointers
 * Description: Boats to Save People
 * - The i-th person has weight people[i], and each boat can carry a maximum weight of limit.
 * - Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.
 * - Return the minimum number of boats to carry every given person.
 * Example:
 * - Input: people = [1, 2], limit = 3 => Output: 1
 * - Input: people = [3, 2, 2, 1], limit = 3 => Output: 3
 * @param people - array of people's weights
 * @param limit - maximum weight limit of the boat
 * @returns - minimum number of boats required to save all people
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
