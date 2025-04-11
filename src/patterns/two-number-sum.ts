/**
 * @author: Paper Coding
 * @link: https://www.algoexpert.io/questions/two-number-sum
 * Difficulty: Easy
 * Description:
 * - Given an array of integers, return an array of two numbers that add up to a target sum.
 * - The output array must have two distinct numbers.
 * - If no two numbers add up to the target sum, return an empty array.
 * Sample Input: [3, 5, -4, 8, 11, 1, -1, 6], 10
 * Sample Output: [-1, 11]
 * -------------------------------------------------------------------------------------------
 * SOLUTION:
 * - Create a set of numbers from the input array in order to check if a number exists in O(1) time.
 * - Iterate through the input array.
 * - For each number, calculate the difference between the target sum and the current number.
 * - If the difference exists in the set and is not the same as the current number, return the pair.
 * - If no pair is found, return an empty array.
 * - Time Complexity: O(N)
 * - Space Complexity: O(N)
 * - N is the number of elements in the input array.
 * -------------------------------------------------------------------------------------------
 * NOTE:
 * - Set is commonly used to store unique elements when solving problems related to Arrays.
 * - The Set data structure has O(1) time complexity for add, delete, and search operations.
 */
function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const numSet = new Set<number>(array);
  for (const num of array) {
    const diff = targetSum - num;
    if (numSet.has(diff) && diff !== num) {
      return [num, diff];
    }
  }
  return [];
}

export { twoNumberSum };
