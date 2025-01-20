/**
 * @author: Paper Coding
 * @link: https://leetcode.com/problems/container-with-most-water/description/
 * Pattern: Arrays - Two Pointers
 * Description: Container with Most Water
 * - Given an integer array height, representing the height of the bars.
 * - Find the two bars that form a container that holds the most water.
 * - Return the maximum area of the container.
 * For Example:
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49, Explanation: The maximum area is formed by bars 8 and 7.
 * Intuition: Use two pointers to find the maximum area.
 * - Start with the widest container and move the pointers inwards.
 * - The area is limited by the height of the shorter bar.
 * - Move the pointer with the shorter bar to find a taller bar.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
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
