/**
 * @author: Paper Coding
 * @link: https://www.algoexpert.io/questions/three-number-sum
 * Difficulty: Medium
 * Description:
 * - Given an array of integers, return an array of three numbers that add up to a target sum.
 * - The number in the output array must be in ascending order.
 * - The output array must have three distinct numbers.
 * - If no three numbers add up to the target sum, return an empty array.
 * Sample Input: [12, 3, 1, 2, -6, 5, -8, 6], 0
 * Sample Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 * -------------------------------------------------------------------------------------------
 * SOLUTION:
 * - Sort the input array in ascending order.
 * - Because if the current number plus two numbers are greater than the target sum
 * - we know that we need to move the right pointer to the left, to decrease the sum.
 * - For example: The current number is -8, we go find -8 + x + y = target, where target = 0.
 * - x is the left pointer and y is the right pointer. If -8 + x + y > 0, we need to decrease the sum by moving the right pointer to the left.
 * - Iterate through the input array.
 * - For each number, call a helper function to find two numbers that add up with the current number to the target sum.
 * - The helper function uses two pointers to find the two numbers.
 * - If the sum of the three numbers is equal to the target sum, add the three numbers to the results array.
 * - If the sum is less than the target sum, move the left pointer to the right.
 * - If the sum is greater than the target sum, move the right pointer to the left.
 * - Return the results array.
 * - Time Complexity: O(N^2)
 * - Space Complexity: O(1)
 * - N is the number of elements in the input array.
 * -------------------------------------------------------------------------------------------
 * NOTE:
 * - This problem is a variation of the Two Number Sum problem.
 * - The Two Number Sum problem uses a set to store unique elements.
 * - The Three Number Sum problem uses two pointers to find the two numbers.
 * - For each number, pick the left and right pointers to find the two numbers.
 * - The left pointer starts from the element next to the current number.
 * - The right pointer starts from the last element.
 * - Move the left and right pointers based on the sum of the three numbers.
 * ------------------------------------------------------------------------------------------
 * KEY TAKEAWAYS:
 * - Sort the input array to make it easier to find the two numbers.
 * - Use two pointers to find two numbers that add up to a target sum.
 * - Move left and right pointers based on the sum of the three numbers.
 * - Return the results array.
 * - Time Complexity: O(N^2)
 * - Space Complexity: O(1)
 */
function threeNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const sortedArray = array.sort((a, b) => a - b);
  const results: number[][] = [];

  for (let i = 0; i < sortedArray.length - 2; i++) {
    const triplets = findTriplets(sortedArray, targetSum, i);
    results.push(...triplets);
  }

  return results;
}

function findTriplets(
  array: number[],
  targetSum: number,
  currentIndex: number,
) {
  const triplets: number[][] = [];
  let leftPointer = currentIndex + 1; // start from the element next to i
  let rightPointer = array.length - 1; // start from the last element

  while (leftPointer < rightPointer) {
    const currentElement = array[currentIndex];
    const nextToTheCurrent = array[leftPointer];
    const fromLastElement = array[rightPointer];

    const threeSum = currentElement + nextToTheCurrent + fromLastElement;

    if (threeSum === targetSum) {
      triplets.push([currentElement, nextToTheCurrent, fromLastElement]);
      leftPointer++;
    } else if (threeSum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return triplets;
}

export { threeNumberSum };
