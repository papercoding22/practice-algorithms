/**
 * Finds two numbers in an array that add up to a specific target.
 * @param nums - The array of numbers to search.
 * @param target - The target sum.
 * @returns An array containing the indices of the two numbers, or an empty array if no such numbers exist.
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

export { twoSum };
