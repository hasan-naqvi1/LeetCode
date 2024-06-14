var moveZeroes = function (nums) {
  let lastNonZeroIndex = 0;

  // Move all non-zero to the beginning of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex++] = nums[i];
    }
  }

  // Fill the remaining positions with zeroes
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
