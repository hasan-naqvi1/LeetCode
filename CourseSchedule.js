const canFinish = (numCourses, prerequisites) => {
  const preMap = new Map();
  const visit = new Set();

  // Initialize preMap with empty arrays for each course
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }

  // Fill the preMap with prerequisites
  for (const [course, prereq] of prerequisites) {
    preMap.get(course).push(prereq);
  }

  const dfs = (crs) => {
    if (visit.has(crs)) return false;
    if (preMap.get(crs).length === 0) return true;

    visit.add(crs);

    for (const pre of preMap.get(crs)) {
      if (!dfs(pre)) return false;
    }

    visit.delete(crs);
    preMap.set(crs, []);
    return true;
  };

  // Check each course for cycles
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) return false;
  }

  return true;
};
