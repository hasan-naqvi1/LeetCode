var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] > target) right--;
    if (numbers[left] + numbers[right] < target) left++;
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
  }
};
