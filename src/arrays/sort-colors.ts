/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const buckets = [0, 0, 0];
  for (const item of nums) {
    buckets[item] = buckets[item] + 1;
  }

  console.log(buckets);

  let index = 0;
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i]; j++) {
      nums[index] = i;
      index++;
    }
  }

  console.log(nums);
}

export { sortColors };
