import { describe, it, expect } from 'vitest';
import { maxArea } from '../two-pointers/container-with-most-water';

describe('Container with Most Water', () => {
  it('should return the maximum area of the container', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toEqual(49);
  });
});
