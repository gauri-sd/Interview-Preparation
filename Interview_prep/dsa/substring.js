function generateSubstrings(s, k) {
  const substrings = [];
  console.log(s.length - k, "s", s.length, k);
  for (let i = 0; i <= s.length - k; i++) {
    const substring = s.substring(i, i + k);
    console.log("JKNJ", substring);
    substrings.push(substring);
  }
  return substrings;
}

const s = "abcde";
const k = 3;
console.log(generateSubstrings(s, k)); // Output: ["ab", "bc", "cd"]
