/**
 * Pattern: Sorting - Insertion Sort
 * Recognition:
 * - When you need a simple, stable sorting algorithm
 * - Efficient for small datasets or nearly sorted arrays
 * - When you need to sort data as it arrives (online sorting)
 * - Works well when array is already partially sorted
 *
 * Description:
 * Insertion Sort builds the final sorted array one item at a time by repeatedly
 * taking the next element and inserting it into its correct position among the
 * previously sorted elements. Similar to how you might sort playing cards in your hand.
 *
 * Example:
 * - Input: [64, 34, 25, 12, 22, 11, 90] => Output: [11, 12, 22, 25, 34, 64, 90]
 * - Input: [5, 1, 4, 2, 8] => Output: [1, 2, 4, 5, 8]
 *
 * Approach:
 * 1. Start from the second element (index 1) as the first element is already "sorted"
 * 2. Store the current element as the key to be inserted
 * 3. Compare the key with elements to its left
 * 4. Shift larger elements one position to the right
 * 5. Insert the key into its correct position
 * 6. Repeat for all elements in the array
 *
 * Time complexity: O(n²) - worst and average case, O(n) - best case (already sorted)
 * Space complexity: O(1) - sorts in-place
 */
function insertionSort(arr: number[]): number[] {
  const len = arr.length;

  // Start from second element (index 1)
  for (let i = 1; i < len; i++) {
    const key = arr[i]; // Element to be inserted in correct position
    let j = i - 1;

    // Shift elements greater than key one position to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert key at its correct position
    arr[j + 1] = key;
  }

  return arr;
}

export { insertionSort };
