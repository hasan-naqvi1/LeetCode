function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  charcount = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (charcount[char]) {
      charcount[char]++;
    } else charcount[char] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!charcount[char]) {
      return false;
    }
    charcount[char]--;
  }
  return true;
}
console.log(isAnagram("selenreeastaco", "ocatselenreeas"));
