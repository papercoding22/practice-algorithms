import { describe, it, expect } from 'vitest';
import { groupAnagrams } from '../group-anagrams';

describe('groupAnagrams', () => {
  it('should group the anagrams together', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

    const result = groupAnagrams(strs);

    expect(result).toStrictEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
  });
});
