function findMedianSortedArrays(nums1, nums2) {
  // Step 1: Initial Setup
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;
  const halfLength = Math.floor((totalLength + 1) / 2);

  // Step 2: Binary Search Initialization
  let left = 0;
  let right = m;

  while (left <= right) {
    // Step 3: Iteration
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = halfLength - partition1;

    // Step 4: Check Validity
    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // Step 8: Calculate Median
      if (totalLength % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      // Step 5: Adjust Partition
      right = partition1 - 1;
    } else {
      // Step 5: Adjust Partition
      left = partition1 + 1;
    }
  }

  // Step 9: Return Result (implicitly done in Step 8)
}
