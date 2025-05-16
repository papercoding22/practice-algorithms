import { validPath } from '../find-if-paths-exist-in-graph';

describe('validPath', () => {
  it('should return true for a valid path', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const source = 0;
    const destination = 4;

    expect(validPath(n, edges, source, destination)).toBe(true);
  });

  it('should return false for an invalid path', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    const source = 0;
    const destination = 4;

    expect(validPath(n, edges, source, destination)).toBe(false);
  });
});
