const solve = (board) => {
  const rows = board.length;
  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        board[r][c] === "O" &&
        (r === 0 || r === rows - 1 || c === 0 || c === cols - 1)
      ) {
        capture(board, r, c, rows, cols);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "H") {
        board[r][c] = "O";
      }
    }
  }
};

const capture = (board, r, c, rows, cols) => {
  if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== "O") return;
  board[r][c] = "H";
  capture(board, r + 1, c, rows, cols);
  capture(board, r - 1, c, rows, cols);
  capture(board, r, c + 1, rows, cols);
  capture(board, r, c - 1, rows, cols);
};
