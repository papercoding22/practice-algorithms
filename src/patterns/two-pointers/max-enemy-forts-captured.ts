function captureForts(forts: number[]): number {
  let maxCaptures = 0;
  const n = forts.length;

  for (let i = 0; i < n; i++) {
    if (forts[i] === 1) {
      // Check to the left
      let leftCaptures = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (forts[j] === -1) {
          maxCaptures = Math.max(maxCaptures, leftCaptures);
          break;
        } else if (forts[j] === 0) {
          leftCaptures++;
        } else {
          break; // Encountered another fort
        }
      }

      // Check to the right
      let rightCaptures = 0;
      for (let j = i + 1; j < n; j++) {
        if (forts[j] === -1) {
          maxCaptures = Math.max(maxCaptures, rightCaptures);
          break;
        } else if (forts[j] === 0) {
          rightCaptures++;
        } else {
          break; // Encountered another fort
        }
      }
    }
  }

  return maxCaptures;
}

export { captureForts };
