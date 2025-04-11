function distinctAverages(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;
  const set = new Set<number>();
  while (left < right) {
    const avg = (sortedNums[left] + sortedNums[right]) / 2;
    set.add(avg);
    left++;
    right--;
  }

  return set.size;
}

export { distinctAverages };
