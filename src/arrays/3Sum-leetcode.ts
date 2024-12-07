function findTriplets(nums: number[], currentIndex: number) {
  const triplets: number[][] = [];
  let left = currentIndex + 1;
  let right = nums.length - 1;
  while (left < right) {
    const current = nums[currentIndex];
    const leftElement = nums[left];
    const rightElement = nums[right];
    const threeSum = current + leftElement + rightElement;
    if (threeSum === 0) {
      triplets.push([current, leftElement, rightElement]);

      while (left < right && leftElement === nums[left + 1]) {
        left++;
      }

      while (left < right && rightElement === nums[right - 1]) {
        right--;
      }
      left++;
      // move right as well because if we still keep the right, the sum will be surely greater than 0
      right--;
    } else if (threeSum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return triplets;
}

function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const results: number[][] = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    const triplets = findTriplets(sortedNums, i);
    results.push(...triplets);
  }

  return results;
}

export { threeSum };
