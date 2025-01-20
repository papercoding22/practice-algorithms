/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * For Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4] Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * Intuition:
 * - We can solve this problem using Kadane's algorithm.
 * - We can keep track of the maximum sum and the current sum.
 * - If the current sum is less than 0, we can reset the current sum to 0.
 * - We can then update the maximum sum with the maximum of the current sum and the maximum sum.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1)
 */

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    max = Math.max(max, sum);
  }

  return max;
}

export { maxSubArray };
