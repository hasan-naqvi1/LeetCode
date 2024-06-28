function isValidSudoku(board) {
  const row = new Map();
  const cols = new Map();
  const box = new Map();
  for (let r = 0; r < 9; r++) {
    row.set(r, new Map());
    cols.set(r, new Map());
    box.set(r, new Map());
  }
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];
      if (num === ".") continue;
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3); // To access the sub boxes
      if (
        row.get(r).has(num) ||
        cols.get(c).has(num) ||
        box.get(boxIndex).has(num)
      ) {
        return false;
      }
      row.get(r).set(num, true);
      cols.get(c).set(num, true);
      box.get(boxIndex).set(num, true);
    }
  }
  return true;
}
