const permute = (nums) => {
  const res = [];
  if (nums.length === 1) {
    res.push([nums[0]]);
    return res;
  }
  for (let i = 0; i < nums.length; i++) {
    const remaining = nums.filter((_, j) => j !== i);
    const perms = this.permute(remaining);

    for (const perm of perms) {
      perm.push(nums[i]);
      res.push([...perm]);
    }
  }
  return res;
};
