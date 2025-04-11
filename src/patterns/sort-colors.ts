/**
 * Link: https://leetcode.com/problems/sort-colors/
 * Level: Easy
 * Pattern: Sorting
 * Description: Sort Colors
 * - Sort an array of 0's, 1's and 2's in linear time complexity.
 * - You are not allowed to use the inbuilt sort function.
 * - The algorithm should run in O(n) time complexity.
 * Intuition:
 * - Create a bucket array to store the count of each element
 * - Loop through the array and increment the count of each element
 * - Loop through the bucket array and update the original array
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function sortColors(nums: number[]): void {
  const buckets = [0, 0, 0];
  for (const item of nums) {
    buckets[item] = buckets[item] + 1;
  }

  console.log(buckets);

  let index = 0;
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i]; j++) {
      nums[index] = i;
      index++;
    }
  }

  console.log(nums);
}

export { sortColors };
