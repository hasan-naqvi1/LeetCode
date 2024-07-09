//DP
const LIS = (n) => {
  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
const LISBS = (num) => {
  const sub = [];
  for (let n of num) {
    let left = 0;
    let right = sub.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (sub[mid] < n) left = mid + 1;
      else right = mid;
    }
    if (left === sub.length) sub.push(n);
    else sub[left] = n;
  }
  return sub.length;
};
