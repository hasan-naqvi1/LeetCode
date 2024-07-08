class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let visit = new Set();
    let q = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 0) {
          q.push([r, c]);
          visit.add(r + "," + c);
        }
      }
    }
    let dist = 0;
    while (q.length > 0) {
      const l = q.length;
      for (let i = 0; i < l; i++) {
        let [r, c] = q.shift();
        grid[r][c] = dist;
        this.addCell(r + 1, c, rows, cols, visit, grid, q);
        this.addCell(r - 1, c, rows, cols, visit, grid, q);
        this.addCell(r, c + 1, rows, cols, visit, grid, q);
        this.addCell(r, c - 1, rows, cols, visit, grid, q);
      }
      dist += 1;
    }
  }

  addCell(r, c, rows, cols, visit, grid, q) {
    if (
      Math.min(r, c) < 0 ||
      r === rows ||
      c === cols ||
      grid[r][c] === -1 ||
      visit.has(r + "," + c)
    )
      return;
    visit.add(r + "," + c);
    q.push([r, c]);
  }
}
