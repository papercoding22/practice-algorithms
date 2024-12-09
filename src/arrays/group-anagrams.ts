/**
 * @author: Paper Coding
 * @link: https://leetcode.com/problems/group-anagrams/description/
 * @description: Group Anagrams
 * - Given an array of strings strs, group the anagrams together.
 * - Return the groups of anagrams.
 * For Example:
 * Input: ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<number, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sumAscii = word
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    if (!map.has(sumAscii)) {
      map.set(sumAscii, []);
    }
    map.get(sumAscii)?.push(word);
  }

  return Array.from(map.values());
}

export { groupAnagrams };
