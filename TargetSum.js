var findTargetSumWays = function (nums, target) {
  const dp = new Map();
  const n = nums.length;

  return countWays(n - 1, target, dp, nums);
};
const countWays = (index, rem, dp, nums) => {
  const key = `${index}#${rem}`;

  if (index < 0) return rem === 0 ? 1 : 0;
  if (dp.has(key)) return dp.get(key);

  const plus = countWays(index - 1, rem + nums[index], dp, nums);
  const minus = countWays(index - 1, rem - nums[index], dp, nums);
  const count = plus + minus;
  dp.set(key, count);
  return count;
};
