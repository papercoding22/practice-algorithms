/**
 * Leetcode URL: https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
 */

function maximumSubarraySum(nums: number[], k: number): number {
  let left = 0;
  let maxSum = 0;
  let currentSum = 0;
  const seen = new Set<number>();
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (right - left + 1 > k || seen.has(nums[right])) {
      // Shrink
      currentSum -= nums[left];
      seen.delete(nums[left]);
      left++;
    }

    seen.add(nums[right]);

    while (right - left + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

export { maximumSubarraySum };
