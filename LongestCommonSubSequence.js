const LCSS = (text1, text2) => {
  const m = text1.length;
  const n = text2.length;
  if (m === 0 || n === 0) return 0;
  const dp = new Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) dp[i][j] = dp[i + 1][j + 1] + 1;
      else dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }
  return dp[0][0];
};
