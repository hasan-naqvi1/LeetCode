var singleNumber = function (nums) {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    unique ^= nums[i];
  }
  return unique;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
