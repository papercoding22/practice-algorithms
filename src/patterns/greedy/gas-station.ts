function canCompleteCircuit(gas: number[], cost: number[]): number {
  if (gas.length === 0 || cost.length === 0) {
    return -1;
  }

  const n = gas.length;

  // Check if solution is possible
  let totalGas = 0;
  let totalCost = 0;

  for (let i = 0; i < n; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }

  // If total gas is less than total cost, impossible to complete circuit
  if (totalGas < totalCost) {
    return -1;
  }

  // Find the starting point using greedy approach
  let currentTank = 0;
  let startStation = 0;

  for (let i = 0; i < n; i++) {
    // Add gas from current station and subtract cost to next station
    currentTank += gas[i] - cost[i];

    // If we run out of fuel, we can't start from any station
    // between startStation and i (inclusive)
    if (currentTank < 0) {
      // Reset: try starting from next station
      startStation = i + 1;
      currentTank = 0;
    }
  }

  return startStation;
}

export { canCompleteCircuit };
