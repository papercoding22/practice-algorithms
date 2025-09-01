function canJump(nums: number[]): boolean {
  const arrLen = nums.length;

  function jump(i: number) {
    if (i >= arrLen) {
      return true;
    }

    if (nums[i] === 0) {
      return false;
    }

    console.log(`Jumping from index ${i} with value ${nums[i]}`);
    const jumpLen = nums[i];
    const jumpTo = i + jumpLen;
    console.log(`Jumping to index ${jumpTo}`);

    if (jump(jumpTo)) {
      return true;
    }

    return false;
  }

  return jump(0);
}

export { canJump };
