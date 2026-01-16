function bubbleSort(arr: number[]): number[] {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
    for (let j = 0; j < arrLen - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

export { bubbleSort };
