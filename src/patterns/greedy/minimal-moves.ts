/**
 * There is an array of N integers sorted in ascending order.
 * In one move, you can do either:
 * 1. Remove the first element of the array.
 * 2. Or inserting an integer before or after the first element of the array.
 * 3. Output an array in which all values X are present in the array occur exactly X times with the minimum number of moves.
 * For example:
 * Input: [1, 1, 3, 4, 4, 4]
 * Output: Minimal moves is 3
 */

function minimalMoves(arr: number[]): number {
  const freq = new Map<number, number>();

  for (const num of arr) {
    if (!freq.has(num)) freq.set(num, 0);
    freq.set(num, freq.get(num)! + 1);
  }

  const result: number[] = [];
  const keys = freq.keys();
  let totalMoves = 0;

  for (const key of keys) {
    const currentCount = freq.get(key)!;
    const targetCount = key;

    let adjustCost = 0;
    if (currentCount <= targetCount) {
      adjustCost = targetCount - currentCount; // Need to insert
    } else if (currentCount > targetCount) {
      adjustCost = currentCount - targetCount; // Need to remove
    }

    const removeAllCost = currentCount;
    if (adjustCost <= removeAllCost) {
      totalMoves += adjustCost;
      result.push(...Array(targetCount).fill(key));
    } else {
      totalMoves += removeAllCost;
    }
  }

  return totalMoves;
}

export { minimalMoves };
