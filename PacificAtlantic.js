var pacificAtlantic = function (heights) {
  if (!heights || heights.length === 0) return [];

  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = new Set();
  const atlantic = new Set();

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights, rows, cols); // Left edge (Pacific)
    dfs(r, cols - 1, atlantic, heights, rows, cols); // Right edge (Atlantic)
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, heights, rows, cols); // Top edge (Pacific)
    dfs(rows - 1, c, atlantic, heights, rows, cols); // Bottom edge (Atlantic)
  }

  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)) {
        result.push([r, c]);
      }
    }
  }

  return result;
};

const dfs = (r, c, ocean, heights, rows, cols) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  ocean.add(`${r},${c}`);

  for (const [dr, dc] of directions) {
    const newRow = r + dr;
    const newCol = c + dc;
    if (
      newRow >= 0 &&
      newRow < rows &&
      newCol >= 0 &&
      newCol < cols &&
      !ocean.has(`${newRow},${newCol}`) &&
      heights[newRow][newCol] >= heights[r][c]
    ) {
      dfs(newRow, newCol, ocean, heights, rows, cols);
    }
  }
};
