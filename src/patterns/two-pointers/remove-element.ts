/**
 * Remove Element
 * Description:
 * - Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * - The relative order of the elements may be changed.
 * - Then return the number of elements in nums which are not equal to val.
 * Example:
 * - Input: nums = [3,2,2,3], val = 3 => Output: 2, nums = [2,2]
 * - Input: nums = [0,1,2,2,3,0,4,2], val = 2 => Output: 5, nums = [0,1,4,0,3]
 * Constraints:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 * Intuition:
 * - Use slow and fast pointers to remove the element in-place.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeElement(nums: number[], val: number): number {
  let slow = 0; // Keep track
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[slow] = nums[i];
      slow++;
    }
  }

  return slow;
}

export { removeElement };
