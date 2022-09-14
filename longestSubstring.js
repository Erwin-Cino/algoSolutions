//find the longest unique substring in a string
function longestUniqueSubstring(s) {
  const hash = new Map();
  let startIndex = 0;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      //   startIndex = Math.max(startIndex, hash.get(s[i]));
      startIndex = Math.max(startIndex, hash.get(s[i]));
    }
    longest = Math.max(longest, i - startIndex + 1);
    hash.set(s[i], i + 1);
  }
  return longest;
}

longestUniqueSubstring("pwwkew");
