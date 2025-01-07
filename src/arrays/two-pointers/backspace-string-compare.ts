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
 */

function getNextValidIndex(s: string, index: number): number {
  let skip = 0;
  while (index >= 0) {
    if (s[index] === '#') {
      skip++;
    } else if (skip > 0) {
      skip--;
    } else {
      break;
    }
    index--;
  }

  return index;
}

function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = getNextValidIndex(s, i);
    j = getNextValidIndex(t, j);

    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false; // Characters are different
    }

    if (i >= 0 !== j >= 0) {
      return false; // One string is empty
    }

    console.log('i:', i, 'j:', j);
    console.log('s[i]:', s[i], 't[j]:', t[j]);

    i--;
    j--;
  }

  return true;
}

export { backspaceCompare };
