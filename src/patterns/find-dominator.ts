function findDominator(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();
  for (const i of nums) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i)! + 1);
    }
  }

  for (const [key, value] of map.entries()) {
    if (value > n / 2) {
      return key;
    }
  }

  return -1;
}

export { findDominator };
