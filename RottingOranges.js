/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const q = [];
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let fresh = 0;
  let time = 0;

  // Initialize the queue with positions of rotten oranges and count fresh oranges
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) q.push([r, c]);
    }
  }

  // Continue BFS until there are no fresh oranges left or no more to process
  while (fresh > 0 && q.length > 0) {
    fresh = bfs(q, ROWS, COLS, grid, fresh);
    time++;
  }

  return fresh === 0 ? time : -1;
};
const bfs = (q, ROWS, COLS, grid, fresh) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const l = q.length;
  for (let i = 0; i < l; i++) {
    let [currR, currC] = q.shift();
    for (const [dr, dc] of directions) {
      const row = currR + dr;
      const col = currC + dc;
      if (
        row >= 0 &&
        row < ROWS &&
        col >= 0 &&
        col < COLS &&
        grid[row][col] === 1
      ) {
        grid[row][col] = 2;
        q.push([row, col]);
        fresh--;
      }
    }
  }
  return fresh;
};
