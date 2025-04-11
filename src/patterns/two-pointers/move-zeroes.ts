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
 * Hints:
 * - 1. You must do this in-place without making a copy of the array.
 * - 2. Minimize the total number of operations.
 * - 3. Use two pointers to solve the problem.
 * - 4. Try to solve it in one pass.
 * Solution: Slow & Fast Pointers
 * - Initialize slowPointer to 0
 * - Iterate through the array with fastPointer
 * - If the element at fastPointer is not 0, move it to the slowPointer and increment slowPointer
 * - After the loop, fill the rest of the array with 0
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Tags: Array, Two Pointers
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
