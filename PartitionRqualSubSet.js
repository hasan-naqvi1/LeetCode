var canPartition = function (nums) {
  const sum = nums.reduce((acc, nums) => acc + nums, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const n of nums) {
    for (let i = target; i >= n; i--) {
      dp[i] = dp[i] || dp[i - n];
    }
  }
  return dp[target];
};
