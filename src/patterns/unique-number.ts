/**
 * description:
 * - Given an array of integers, find the lowest unique number.
 * - If there is no unique number, return -1.
 * - If there are multiple unique numbers, return the lowest one.
 * For example, given the array [4, 10, 5, 4, 2, 10], the lowest unique number is 5.
 */
function findLowestUniqueNumber(nums: number[]): number {
  const map = new Map<number, number>();
  for (const i of nums) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i)! + 1);
    }
  }

  let result = -1;
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      if (result === -1 || key < result) {
        result = key;
      }
    }
  }

  return result;
}

export { findLowestUniqueNumber };
