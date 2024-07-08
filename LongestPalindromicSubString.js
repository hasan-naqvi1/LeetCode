const longestPalindrome = (s) => {
  let res = "";
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    // Odd length
    [res, resLen] = expandAroundCenter(s, i, i, res, resLen);

    // Even length
    [res, resLen] = expandAroundCenter(s, i, i + 1, res, resLen);
  }

  return res;
};

const expandAroundCenter = (s, left, right, res, resLen) => {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    if (right - left + 1 > resLen) {
      res = s.substring(left, right + 1);
      resLen = right - left + 1;
    }
    left--;
    right++;
  }
  return [res, resLen];
};
