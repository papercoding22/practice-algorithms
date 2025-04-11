/**
 * Single Number
 * Pattern: Bit Manipulation
 * Description:
 * - Link: https://leetcode.com/problems/single-number/description
 * - Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * - Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * Examples:
 * - Input: [2,2,1] -> Output: 1
 * - Input: [4,1,2,1,2] -> Output: 4
 * - Input: [1] -> Output: 1
 * Intituition:
 * - We can use a set to keep track of the numbers that we have seen so far.
 * - If we see a number that is already in the set, we remove it from the set.
 * - At the end, we will have a set with only one element, which is the single number.
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 * - We can also use bitwise XOR to solve this problem.
 * - XOR of a number with itself is 0.
 * - XOR of a number with 0 is the number itself.
 * - So, if we XOR all the numbers in the array, we will be left with the single number.
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */

function singleNumberUsingSet(nums: number[]): number {
  const singleSet: Set<number> = nums.reduce((acc, curr) => {
    if (!acc.has(curr)) {
      acc.add(curr);
    } else {
      acc.delete(curr);
    }

    return acc;
  }, new Set<number>());

  return Array.from(singleSet.values())[0];
}

function singleNumberBitwise(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}

export { singleNumberUsingSet, singleNumberBitwise };
