// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

let isAnagram = (s, t) => {
  let sArr = s.split("").sort().join("");
  let tArr = t.split("").sort().join("");
  if (s.length !== t.length) {
    return false;
  } else {
    console.log(sArr, tArr);
    return sArr === tArr;
  }
};

console.log(isAnagram("anagram", "nagaram"));
