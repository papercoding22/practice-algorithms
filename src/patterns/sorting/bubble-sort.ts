/**
 * Pattern: Sorting - Bubble Sort
 * Recognition:
 * - When you need a simple sorting algorithm for educational purposes
 * - Small datasets where simplicity is preferred over efficiency
 * - When you need a stable sorting algorithm that works in-place
 * - Not recommended for production use with large datasets
 *
 * Description:
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through
 * the array, compares adjacent elements and swaps them if they are in the
 * wrong order. The algorithm gets its name because smaller elements "bubble"
 * to the top of the list.
 *
 * Example:
 * - Input: [64, 34, 25, 12, 22, 11, 90] => Output: [11, 12, 22, 25, 34, 64, 90]
 * - Input: [5, 1, 4, 2, 8] => Output: [1, 2, 4, 5, 8]
 *
 * Approach:
 * 1. Iterate through the array from start to end
 * 2. Compare each pair of adjacent elements
 * 3. Swap them if they're in the wrong order (left > right)
 * 4. After each pass, the largest element "bubbles up" to its correct position
 * 5. Repeat until the array is sorted
 *
 * Time complexity: O(n²) - worst and average case, O(n) - best case (already sorted)
 * Space complexity: O(1) - sorts in-place
 */
function bubbleSort(arr: number[]): number[] {
  const arrLen = arr.length;

  // Outer loop: number of passes needed
  for (let i = 0; i < arrLen - 1; i++) {
    // Inner loop: compare adjacent elements
    // After each pass, the last i elements are already in place
    for (let j = 0; j < arrLen - i - 1; j++) {
      // Swap if current element is greater than next element
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

export { bubbleSort };
