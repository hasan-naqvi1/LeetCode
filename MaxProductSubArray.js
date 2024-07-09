var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let res = nums[0];
  let minPro = nums[0];
  let maxPro = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    if (curr < 0) [minPro, maxPro] = [maxPro, minPro];
    maxPro = Math.max(curr, curr * maxPro);
    minPro = Math.min(curr, curr * minPro);
    res = Math.max(res, maxPro);
  }
  return res;
};
