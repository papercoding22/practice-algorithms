function countValidTriangles(nums: number[], currentIndex: number) {
  let slowPointer = currentIndex + 1;

  // increase count by 1 when 3 sides are valid
  let count = 0;

  while (slowPointer < nums.length - 1) {
    let fastPointer = slowPointer + 1;

    while (fastPointer < nums.length) {
      if (nums[currentIndex] + nums[slowPointer] > nums[fastPointer]) {
        count += 1;
      } else {
        break;
      }

      fastPointer += 1;
    }

    slowPointer += 1;
  }

  return count;
}

function triangleNumber(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    count += countValidTriangles(sortedNums, i);
  }

  return count;
}

export { triangleNumber };
