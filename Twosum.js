var twoSum = function (nums, target) {
  const numToIndex = {}; // Create a hash map to store the indices of the elements

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculating complement

    // Check if the complement exists in the hash map
    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i]; // Return the indices if the complement is found
    }

    // Store the index of the current element in the hash map
    numToIndex[nums[i]] = i;
  }

  // If no solution is found, return an empty array or null
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
