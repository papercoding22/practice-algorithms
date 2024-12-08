/**
 * @author: Paper Coding
 * @link: https://leetcode.com/problems/move-zeroes/description/
 * Difficulty: Easy
 * Pattern: Two Pointers
 * Description:
 * - Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Example:
 * - Input: [0,1,0,3,12]
 * - Output: [1,3,12,0,0]
 */

function moveZeroes(nums: number[]): number[] {
  let slowPointer = 0;
  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== 0) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer++;
    }
  }

  for (let i = slowPointer; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

export { moveZeroes };
