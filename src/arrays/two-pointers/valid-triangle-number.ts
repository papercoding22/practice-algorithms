function findTriplets(nums: number[], currentIndex: number) {
  // nums = [2, 3, 4, 4]
  // 2, 3, 4 (With the first 4)
  // 2, 3, 4 (With the last 4)
  // 2, 3, 4 (With the 3 and the first 4)
  // 2, 3, 4 (With the 3 and the last 4)
  let count = 0;
  let left = currentIndex + 1;

  while (left < nums.length - 1) {
    let right = nums.length - 1;
    const sum = nums[currentIndex] + nums[left];
    while (sum <= nums[right] && right > left) {
      right--;
    }
    count += 1;
    left++;
  }

  return count;
}

function triangleNumber(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    count += findTriplets(sortedNums, i);
  }

  return count;
}

export { triangleNumber };
