/**
 * Link: https://leetcode.com/problems/number-of-distinct-averages/
 * Pattern: Two Pointers
 * Recognition:
 * - Need to pair elements from opposite ends of array
 * - Removing min and max elements repeatedly suggests sorting + two pointers
 * - Using Set to track distinct values
 * Description: You are given a 0-indexed integer array nums of even length.
 * As long as nums is not empty, you must repetitively:
 * - Find the minimum number in nums and remove it.
 * - Find the maximum number in nums and remove it.
 * - Calculate the average of the two removed numbers.
 * Return the number of distinct averages calculated using the above process.
 * Example:
 * - Input: nums = [4,1,4,0,3,5] => Output: 2
 *   Explanation: 
 *   1. Remove 0 and 5, average = (0+5)/2 = 2.5
 *   2. Remove 1 and 4, average = (1+4)/2 = 2.5
 *   3. Remove 3 and 4, average = (3+4)/2 = 3.5
 *   Distinct averages: 2.5 and 3.5, so return 2
 * - Input: nums = [1,100] => Output: 1
 * Approach: Sort the array. Use two pointers (left at start, right at end) to simulate
 * repeatedly removing min and max. Calculate average of each pair and store in a Set.
 * Return the size of the Set for distinct count.
 * Time complexity: O(n log n) - dominated by sorting
 * Space complexity: O(n) - Set can store up to n/2 averages
 */
function distinctAverages(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;
  const set = new Set<number>();
  while (left < right) {
    const avg = (sortedNums[left] + sortedNums[right]) / 2;
    set.add(avg);
    left++;
    right--;
  }

  return set.size;
}

export { distinctAverages };
