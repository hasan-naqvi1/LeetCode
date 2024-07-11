var jump = function (nums) {
  let left = 0;
  let right = 0;
  let res = 0;
  let maxJump = 0;
  while (right < nums.length - 1) {
    for (let i = left; i < right + 1; i++) {
      maxJump = Math.max(maxJump, i + nums[i]);
    }
    left = right + 1;
    right = maxJump;
    res++;
  }
  return res;
};
