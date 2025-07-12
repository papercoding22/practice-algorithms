import { minimumCars } from '../minimum-cars';
import { describe, it, expect } from 'vitest';

describe('minimumCars', () => {
  it('should return the minimum number of cars needed to accommodate all people', () => {
    // Test case 1: Basic case [1, 4, 1], [1, 5, 1] => 2
    expect(minimumCars([1, 4, 1], [1, 5, 1])).toBe(2);
  });
});
