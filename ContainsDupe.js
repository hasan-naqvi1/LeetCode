var containsDuplicate = function (nums) {
  let map = new Map(); // Use Map for better performance with various data types

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      // Check if element exists in the map
      return true; // Duplicate found
    } else {
      map.set(nums[i], true); // Add element to the map
    }
  }
  return false; // No duplicates found
};

let arr = [1, 2, 3, 4, 5, 6, 3, 1];
console.log(containsDuplicate(arr)); // Output: true
