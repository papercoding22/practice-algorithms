/**
 * Description: https://leetcode.com/problems/reverse-string-ii/description/
 * - Given a string s and an integer k, reverse the first k characters for every 2k characters
 * - counting from the start of the string.
 * - If there are fewer than k characters left, reverse all of them.
 * - If there are less than 2k but greater than or equal to k characters,
 * - then reverse the first k characters and leave the other as original.
 * Example 1:
 * - Input: s = "abcdefg", k = 2
 * - Output: "bacdfeg"
 * - Explanation:
 * - 2 chars for every 2*2 = 4 chars => "abcd" forms the first 2k chars.
 * - The next 2k chars are "efg".
 * - The first group is "abcd" => reverse first 2 chars => "ab" => "ba" => "bacd".
 * - The second group is "efg" => reverse first 2 chars => "ef" => "fe" => "feg".
 * - In the end, we have "bacd" + "feg" => "bacdfeg".
 * Example 2:
 * - Input: s = "abcd", k = 2
 * - Output: "bacd"
 * Example 3: For the case where there are fewer than k chars left, reverse all of them.
 * - Input: s = "abcdefg", k = 8
 * - Output: "gfedcba"
 * - Explanation: 8 chars for every 2*8 = 16 chars => "abcdefg" forms the first 2k chars.
 * - The first group is "abcdefg" => reverse all of them => "gfedcba".
 */

/**
 * Basically there are 2 rules of how to reverse a substring:
 * 1. Rule 1: Only reverse the first k characters of the substring. Ex: With k=2, if substring is "abcd", reverse 2 first chars which are "ab", it is reversed to "ba", and the new substring is "bacd".
 * 2. Rule 2: Reverse all chars of the substring. Ex: With k=4, if substring is "abc", reverse all of them, then the new substring is "cba".
 * Now Let's take a look at the examples:
 * 1. Input: s = "abcdefg", k = 2 => Output: "bacdfeg"
 * - The basic info: length of s is 7, and k = 2, 2k = 4.
 * - 2k = 4 which means a substring of s contains 4 chars.
 * - With length 7 which means there are 2 substrings of s: "abcd" and "efg".
 * - The first substring is reversed as follows: "abcd" => first k chars are "ab" => "bacd". (rule 1)
 * - The second substring is reversed as follows: "efg" => first k chars are "ef" => "feg" (rule 1)
 * - Finally, the result is "bacdfeg".
 */

function reverseStr(s: string, k: number): string {
  let reverse = '';
  const arr = s.split('');
  for (let i = 0; i < arr.length; i += 2 * k) {
    // reverse the first k chars
    const firstK = arr
      .slice(i, i + k)
      .reverse()
      .join('');
    // leave the other as original
    const left = arr.slice(i + k, i + 2 * k).join('');
    reverse += firstK + left;
  }
  return reverse;
}

export { reverseStr };
