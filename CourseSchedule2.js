const findOrder = (numCourses, prerequisites) => {
  const preMap = new Map();
  const visit = new Set();
  const permVisit = new Set(); // To track permanently visited nodes
  const result = []; // To store the course order

  // Initialize preMap with empty arrays for each course
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }

  // Fill the preMap with prerequisites
  for (const [course, prereq] of prerequisites) {
    preMap.get(course).push(prereq);
  }

  // Check each course for cycles
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c, preMap, visit, permVisit, result)) return [];
  }

  return result;
};

const dfs = (crs, preMap, visit, permVisit, result) => {
  if (visit.has(crs)) return false; // Cycle detected
  if (permVisit.has(crs)) return true; // Already processed

  visit.add(crs);

  for (const pre of preMap.get(crs)) {
    if (!dfs(pre, preMap, visit, permVisit, result)) return false;
  }

  visit.delete(crs);
  permVisit.add(crs);
  result.push(crs); // Add to result after processing all prerequisites
  return true;
};
