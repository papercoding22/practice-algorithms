/**
 * Author: @papercoding22
 * Link: https://leetcode.com/problems/3sum/
 * Pattern: Two Pointers (Left and Right)
 * Recognition:
 * - Given a number, find pairs that sum to a target number.
 * - Sorted input to efficiently find pairs.
 */

function threeSum(nums: number[]): number[][] {
  // Two Pointer: Left - Right Pointer
  const sortedArray = nums.sort((a, b) => a - b);
  const n = sortedArray.length;
  const results = [];

  for (let i = 0; i < n - 2; i++) {
    const x = sortedArray[i];
    if (i > 0 && x === sortedArray[i - 1]) {
      continue;
    }
    // Find pairs (y, z) + x = 0
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const y = sortedArray[left];
      const z = sortedArray[right];
      const sum = x + y + z;
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum === 0) {
        // x, y, z is triplet
        results.push([x, y, z]);
        left++;
        right--;
        while (sortedArray[left] === sortedArray[left - 1]) {
          left++;
        }

        while (sortedArray[right] === sortedArray[right + 1]) {
          right--;
        }
      }
    }
  }
  return results;
}

export { threeSum };
