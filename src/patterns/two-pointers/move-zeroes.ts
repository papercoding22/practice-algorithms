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
  // Problem: move all 0's to the end of the array but still must maintain the relative order

  // Input: an integer array

  // Algorithms
  // - What is the simplest task does it operate?
  //     + Ex: [0, 1] => Swap 0 & 1 => [1, 0]
  //     + To swap two items, assign 2 pointers to 2 positions.
  // - When does it stop the algorithm?
  //     + It stops when it visits all items in the array.
  // Ex: [0, 1, 0]
  // Begin
  // - Initialize: slow = 0;
  // - For loop: i = 0; i < n; i++;
  //      - 1st pass: slow = 0, fast = 0; => Nothing happens => [0, 1, 0]
  //      - 2nd pass: slow = 0, fast = 1; Place fast to slow; slow moves 1 step => [1,  1, 0]
  //      - 3rd pass: slow = 1, fast = 0; => Nothing happens => [1, 1, 0]
  // - Exit the first for loop: slow = 1; current nums = [1, 1, 0]
  // - Update items from slow to end of nums to 0.
  // - For loop: i = slow; i -> n - 1;
  //      - 1st pass: i = 1; nums[1] = 0 => [1, 0, 0]
  //      - 2nd pass: i = 2; nums[2] = 0 => [1, 0, 0]
  // - Exit
  // Done

  // Ex: [1, 0, 1, 0]
  // Begin
  // - Init slow = 0;
  // - For loop: i = 0; i < n; i++;
  //      - 1st pass: slow(0) = 1; fast(0) = 1; fast(0) !== 0?; yes swap; slow++ => [1, 0, 1, 0]
  //      - 2nd pass: slow(1) = 0; fast(1) = 0; fast(1) !== 0? => no, nothing happens => [1, 0, 1, 0]
  //      - 3rd pass: slow(1) = 0; fast(2) = 1; fast != 0; swap; slow++ => [1, 1, 1, 0]
  //      - 4th pass: slow(2) = 1; fast(3) = 0; fast != 0? no, nothing happends => [1, 1, 1, 0]
  // - Exit the first for loop: slow(2); current nums = [1, 1, 1, 0]
  // - For loop: i = slow; i < n; i++
  //      - 1st pass: i = 2; nums[2] = 0; => [1, 1, 0, 0]
  //      - 2nd pass: i = 3; nums[3] = 0; => [1, 1, 0, 0]
  // End
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
