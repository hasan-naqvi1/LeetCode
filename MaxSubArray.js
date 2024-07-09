/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = nums[0];
  let maxSum = nums[0];
  for (let n of nums.slice(1)) {
    const sum = currSum + n;
    currSum = Math.max(n, sum);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
