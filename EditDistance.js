const editDistance = (word1, word2) => {
  let wl1 = word1.length;
  let wl2 = word2.length;
  if (wl1 === 0 && wl2 === 0) return 0;
  if (wl1 === 0) return wl2;
  if (wl2 === 0) return wl1;
  const dp = new Array(wl1 + 1).fill(0).map(() => Array(wl2 + 1).fill(0));
  //base case below
  for (let i = 0; i < wl1 + 1; i++) dp[i][wl2] = wl1 - i;
  for (let j = 0; j < wl2 + 1; j++) dp[wl1][j] = wl2 - j;

  for (let i = wl1 - 1; i >= 0; i--) {
    for (let j = wl2 - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) dp[i][j] = dp[i + 1][j + 1];
      else {
        dp[i][j] = Math.min(
          dp[i + 1][j] + 1,
          dp[i][j + 1] + 1,
          dp[i + 1][j + 1] + 1
        );
      }
    }
  }
  return dp[0][0];
};
