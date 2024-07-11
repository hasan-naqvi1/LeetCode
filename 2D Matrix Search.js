var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let top = 0;
  let bot = rows - 1;

  while (top <= bot) {
    let midrow = Math.floor((top + bot) / 2);

    if (target > matrix[midrow][cols - 1]) top = midrow + 1;
    else if (target < matrix[midrow][0]) bot = midrow - 1;
    else break;
  }
  if (!(top <= bot)) return false;

  let row = Math.floor((top + bot) / 2);
  let l = 0;
  let r = cols - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target > matrix[row][mid]) l = mid + 1;
    else if (target < matrix[row][mid]) r = mid - 1;
    else return true;
  }
  return false;
};
