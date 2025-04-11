/**
 * A simple program how to use two pointers technique
 */

function twoPointers(nums: number[]) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    console.log(nums[left], nums[right]);
    left++;
    right--;
  }
}

export { twoPointers };
