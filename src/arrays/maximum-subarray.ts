/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
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
