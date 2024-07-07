/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  backTrack(0, [], nums, res);
  return res;
};
const backTrack = (start, subset, nums, res) => {
  res.push([...subset]);
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    subset.push(nums[i]);
    backTrack(i + 1, subset, nums, res);
    subset.pop();
  }
};
