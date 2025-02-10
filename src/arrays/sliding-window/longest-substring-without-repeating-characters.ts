function lengthOfLongestSubstring(s: string): number {
  const setChars = new Set<string>(); // Check existing characters
  let head = 0; // Head of the window
  let maxLength = 0; // Max length of the substring
  for (let tail = 0; tail < s.length; tail++) {
    while (setChars.has(s[tail])) {
      // Using while loop to slide the head until there is no repeating character
      // remove the character from the set
      setChars.delete(s[head]);
      // slide the the head of the window
      head++;
    }
    setChars.add(s[tail]);
    maxLength = Math.max(maxLength, tail - head + 1);
  }

  return maxLength;
}

export { lengthOfLongestSubstring };
