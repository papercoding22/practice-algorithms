/**
 * Author: @papercoding22
 * Link: https://leetcode.com/problems/3sum/
 * Pattern: Two Pointers
 * Description:
 * - Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * - Notice that the solution set must not contain duplicate triplets.
 * - Example 1: [-1, 0, 1, 2, -1, -4] => [[-1, -1, 2], [-1, 0, 1]]
 * - Example 2: [0, 1, 1] => []
 * - Example 3: [0, 0, 0] => [[0, 0, 0]]
 * - Constraints: 0 <= nums.length <= 3000, -10^5 <= nums[i] <= 10^5
 * Intuition:
 * - Sort the array first
 * - Loop through the array
 * - For each element, find the two other elements that sum up to 0
 * - To avoid duplicates, skip the same element
 * - To avoid duplicate triplets, skip the same left and right elements
 * - If the sum is less than 0, move the left pointer
 * - If the sum is greater than 0, move the right pointer
 * - If the sum is 0, add the triplet to the result
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function findTriplets(nums: number[], currentIndex: number) {
  const triplets: number[][] = [];
  let left = currentIndex + 1;
  let right = nums.length - 1;
  while (left < right) {
    const current = nums[currentIndex];
    const leftElement = nums[left];
    const rightElement = nums[right];
    const threeSum = current + leftElement + rightElement;
    if (threeSum === 0) {
      triplets.push([current, leftElement, rightElement]);

      while (left < right && leftElement === nums[left + 1]) {
        left++;
      }

      while (left < right && rightElement === nums[right - 1]) {
        right--;
      }
      left++;
      // move right as well because if we still keep the right, the sum will be surely greater than 0
      right--;
    } else if (threeSum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return triplets;
}

function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const results: number[][] = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    const triplets = findTriplets(sortedNums, i);
    results.push(...triplets);
  }

  return results;
}

export { threeSum };
