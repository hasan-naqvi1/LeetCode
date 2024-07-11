var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, word, 0, i, j, row, col)) return true;
      }
    }
  }
  return false;
};
const dfs = (board, word, index, i, j, row, col) => {
  if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word[index])
    return false;

  if (index === word.length - 1) return true;

  board[i][j] = "#";
  if (
    dfs(board, word, index + 1, i - 1, j, row, col) ||
    dfs(board, word, index + 1, i + 1, j, row, col) ||
    dfs(board, word, index + 1, i, j - 1, row, col) ||
    dfs(board, word, index + 1, i, j + 1, row, col)
  )
    return true;
  board[i][j] = word[index];
  return false;
};
