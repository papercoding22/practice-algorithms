/**
 * Author: papercoding22
 * Link: https://leetcode.com/problems/backspace-string-compare/
 * Pattern: Two Pointers
 * Level: Easy
 * Description: Backspace String Compare
 * - Given two strings s and t, return true if they are equal
 * - when both are typed into empty text editors.
 * - '#' means a backspace character.
 * - Note that after backspacing an empty text, the text will continue empty.
 * Example:
 * - Input: s = "ab#c", t = "ad#c" => Output: true
 * - Input: s = "ab##", t = "c#d#" => Output: true
 * - Input: s = "a##c", t = "#a#c" => Output: true
 * - Input: s = "a#c", t = "b" => Output: false
 * Intuition:
 * - Use stack to build the final string after backspacing.
 * - Compare the final strings of s and t.
 */

function buildStack(s: string) {
  const stack = [];
  for (const char of s) {
    if (char === '#') {
      if (stack.length > 0) {
        stack.pop(); // Remove the last character if '#' is encountered
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

function backspaceCompare(s: string, t: string): boolean {
  return buildStack(s) === buildStack(t);
}

export { backspaceCompare as backspaceCompareStack };
