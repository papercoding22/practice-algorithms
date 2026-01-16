/**
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Pattern: Two Pointers
 * Recognition:
 * - Need to find optimal pair from both ends of array
 * - Brute force O(n²) can be optimized using two pointers
 * - Decision to move pointer depends on comparing values at both ends
 * Description: You are given an integer array height of length n. There are n vertical lines
 * drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container that holds the most water.
 * Return the maximum amount of water a container can store. Note: You cannot slant the container.
 * Example:
 * - Input: height = [1,8,6,2,5,4,8,3,7] => Output: 49
 *   Explanation: Lines at index 1 (height=8) and index 8 (height=7) form container with area = 7 * 7 = 49
 * - Input: height = [1,1] => Output: 1
 * Approach: Use two pointers starting from both ends. Calculate area using min(left height, right height) * width.
 * Move the pointer pointing to the shorter line inward, as moving the taller one cannot increase area.
 * Track maximum area found.
 * Time complexity: O(n) - single pass through array
 * Space complexity: O(1) - only using constant extra space
 */
function maxArea(height: number[]): number {
  let pointerLeft = 0;
  let pointerRight = height.length - 1;
  let maxArea = 0;
  while (pointerLeft < pointerRight) {
    const area =
      Math.min(height[pointerLeft], height[pointerRight]) *
      (pointerRight - pointerLeft);
    maxArea = Math.max(area, maxArea);
    if (height[pointerLeft] < height[pointerRight]) {
      pointerLeft++;
    } else {
      pointerRight--;
    }
  }

  return maxArea;
}

export { maxArea };
