function ispalindrome(s) {
  s = s.toLowerCase();
  let filtered = "";
  for (let char of s) {
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      filtered += char;
    }
  }
  let reversed = filtered.split("").reverse().join("");
  return reversed === filtered;
}
