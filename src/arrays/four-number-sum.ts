/**
 * @author: Paper Coding
 * @link: https://www.algoexpert.io/questions/four-number-sum
 * Difficulty: Hard
 * Description:
 * - Given an array of integers, find all quadruplets that add up to a target sum,
 * - and return them in a two-dimensional array.
 * - The output array must have four distinct numbers.
 * - If no three numbers add up to the target sum, return an empty array.
 * Sample Input: [7, 6, 4, -1, 1, 2], 16
 * Sample Output: [[7, 6, 4, -1], [7, 6, 1, 2]]
 * -------------------------------------------------------------------------------------------
 * SOLUTION:
 * - Sort the input array in ascending order.
 * - Iterate through the input array.
 * - For each number, nest another loop starting from the next element.
 * - Calculate the first pair sum by adding the current number of the outer loop and the current number of the inner loop.
 * - Now the new target is the target sum minus the pair sum.
 * - Go find the pair of numbers that add up to the new target using two pointers technique.
 * - If the sum of the two numbers is equal to the new target, add the four numbers to the results array.
 * - If the sum is less than the new target, move the left pointer to the right.
 * - If the sum is greater than the new target, move the right pointer to the left.
 * - Return the results array.
 * - Time Complexity: O(N^3)
 * - Space Complexity: O(1)
 *
 */

function fourNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const sortedArray = array.sort((a, b) => a - b);
  const results: number[][] = [];
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      const pairSum = sortedArray[i] + sortedArray[j];
      const newTarget = targetSum - pairSum;
      let left = j + 1;
      let right = sortedArray.length - 1;
      while (left < right) {
        if (sortedArray[left] + sortedArray[right] === newTarget) {
          results.push([
            sortedArray[i],
            sortedArray[j],
            sortedArray[left],
            sortedArray[right],
          ]);
          left++;
        } else if (sortedArray[left] + sortedArray[right] < newTarget) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return results;
}

/**
 * SOLUTION:
 * - Create a hash table to store all pair sums.
 * - Iterate through the input array.
 * - For each number, nest another loop starting from the next element.
 * - In the first inner loop:
 *    - Calculate the pair sum of the main number (outer loop) and the current number (inner loop).
 *    - Calculate the difference between the target sum and the pair sum.
 *    - If the hash table has the difference, add the four numbers to the results array.
 *    - If the hash table does not have the difference, continue to the next iteration.
 * - End of the first inner loop.
 * - Start the second inner lopp from the beginning of the array to the current outer loop index.
 *    - Calculate the pair sum by adding the current number of the outer loop and the current number of the inner loop.
 *    - If the hash table has the pair sum, add the pair to the hash table.
 *    - If the hash table does not have the pair sum, create a new entry in the hash table.
 * - End of the second inner loop.
 * - End of the outer loop.
 * - Return the results array.
 * - Time Complexity: O(N^2)
 * - Space Complexity: O(N^2)
 * -------------------------------------------------------------------------------------------
 * KEY TAKEAWAYS:
 * - (x + y) + (z + w) = targetSum
 * - x + y = P
 * - z + w = Q
 * - P + Q = targetSum
 * - P = targetSum - Q
 * - Q = targetSum - P
 * - We use a hash table to store Q
 */
function fourNumberSumUsingHashTable(array: number[], targetSum: number) {
  // Write your code here.
  const allPairSums = new Map<number, number[][]>();
  const results: number[][] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const pairSum = array[i] + array[j];
      const difference = targetSum - pairSum;
      if (allPairSums.has(difference)) {
        for (const pair of allPairSums.get(difference)!) {
          results.push([...pair, array[i], array[j]]);
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const pairSum = array[i] + array[k];
      if (allPairSums.has(pairSum)) {
        allPairSums.get(pairSum)!.push([array[k], array[i]]);
      } else {
        allPairSums.set(pairSum, [[array[k], array[i]]]);
      }
    }
  }

  return results;
}

export { fourNumberSum, fourNumberSumUsingHashTable };
