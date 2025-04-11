function minSubArrayLen(target: number, nums: number[]): number {
  let min = Infinity;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    if (sum >= target) {
      const windowSize = right - left + 1;
      min = Math.min(windowSize, min);

      // Shrink
      while (sum >= target && left < right) {
        sum = sum - nums[left];
        left++;
        if (sum >= target) {
          const windowSize = right - left + 1;
          min = Math.min(windowSize, min);
        }
      }
    }
  }
  return min === Infinity ? 0 : min;
}

export { minSubArrayLen };
