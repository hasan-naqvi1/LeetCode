function maxAreaOfIsland(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const visit = new Set();

  let area = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      area = Math.max(area, dfs(grid, r, c, ROWS, COLS, visit));
    }
  }
  return area;
}

/**
 * @param {number[][]} grid
 * @param {number} r
 * @param {number} c
 * @param {number} ROWS
 * @param {number} COLS
 * @param {Set} visit
 * @return {number}
 */
function dfs(grid, r, c, ROWS, COLS, visit) {
  if (
    r < 0 ||
    r === ROWS ||
    c < 0 ||
    c === COLS ||
    grid[r][c] === 0 ||
    visit.has(`${r},${c}`)
  ) {
    return 0;
  }
  visit.add(`${r},${c}`);
  return (
    1 +
    dfs(grid, r + 1, c, ROWS, COLS, visit) +
    dfs(grid, r - 1, c, ROWS, COLS, visit) +
    dfs(grid, r, c + 1, ROWS, COLS, visit) +
    dfs(grid, r, c - 1, ROWS, COLS, visit)
  );
}
