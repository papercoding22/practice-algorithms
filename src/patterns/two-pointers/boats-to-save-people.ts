/**
 * Link: https://leetcode.com/problems/boats-to-save-people/
 * Pattern: Two Pointers
 * Recognition:
 * - Find the pair of people that can share a boat.
 * - Sort the people by weight to maximize the number of pairs.
 * - Use two pointers to find the heaviest and lightest person that can share a boat.
 * Description: You are given an array people where people[i] is the weight of the ith person, 
 * and an infinite number of boats where each boat can carry a maximum weight of limit. 
 * Each boat carries at most two people at the same time, provided the sum of their weights is at most limit.
 * Return the minimum number of boats to carry every given person.
 * Example:
 * - Input: people = [1,2], limit = 3 => Output: 1 (boat carries both)
 * - Input: people = [3,2,2,1], limit = 3 => Output: 3 (boats: [1,2], [2], [3])
 * Approach: Sort people by weight, use two pointers (lightest and heaviest). Try to pair them if their sum <= limit, 
 * otherwise send the heaviest person alone. Count boats needed.
 * Time complexity: O(n log n) due to sorting
 * Space complexity: O(1) excluding the space used for sorting
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
