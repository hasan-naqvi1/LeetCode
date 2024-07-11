var rob = function (nums) {
  return Math.max(
    nums[0],
    Math.max(hr1(nums.slice(1)), hr1(nums.slice(0, -1)))
  );
};
const hr1 = (nums) => {
  let r1 = 0;
  let r2 = 0;
  for (const n of nums) {
    const temp = Math.max(n + r1, r2);
    r1 = r2;
    r2 = temp;
  }
  return r2;
};
