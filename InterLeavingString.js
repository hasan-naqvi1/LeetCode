var isInterleave = function (s1, s2, s3) {
  let l1 = s1.length;
  let l2 = s2.length;
  let l3 = s3.length;
  if (l1 + l2 !== l3) return false;
  const dp = new Array(l1 + 1).fill(false).map(() => Array(l2 + 1).fill(false));
  dp[l1][l2] = true;

  for (let i = l1; i >= 0; i--) {
    for (let j = l2; j >= 0; j--) {
      if (i < l1 && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = true;
      if (j < l2 && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = true;
    }
  }
  return dp[0][0];
};
