// find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// 1st approach --> O(n)

let s = "abcabcbb";

function longestSbstring() {
  let right = 0;
  let left = 0;
  let max = 0;
  let set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return max;
}
console.log(longestSbstring(s));

// 2nd  approach --> O(n)2

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

let s1 = "pwwkew";
let set = new Set();
let max = 0;
for (let i = 0; i < s1.length; i++) {
  let count = 0;
  for (let j = i; j < s1.length; j++) {
    if (set.has(s1[j])) {
      set.clear();
      break;
    } else {
      set.add(s1[j]);
      count++;
    }
  }

  if (max < count) {
    max = count;
  }
}

console.log("SET", set);
console.log("count", max);
