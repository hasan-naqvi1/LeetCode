function ispalindrome(s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) {
      left++;
    }
    while (left < right && isAlphaNum(s[right])) {
      right--;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
function isAlphaNume(c) {
  return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
}
