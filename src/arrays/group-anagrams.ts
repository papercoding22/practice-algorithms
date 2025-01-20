/**
 * @author: Paper Coding
 * @link: https://leetcode.com/problems/group-anagrams/description/
 * @description: Group Anagrams
 * - Given an array of strings strs, group the anagrams together.
 * - Return the groups of anagrams.
 * For Example:
 * Input: ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Intuition:
 * - We can group anagrams by summing the ASCII values of the characters in the word.
 * - We can use a map to store the sum of the ASCII values as the key and the words as the value.
 * - We can then return the values of the map.
 * Time Complexity: O(n * m) where n is the number of words and m is the length of the longest word.
 * Space Complexity: O(n) where n is the number of words.
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
