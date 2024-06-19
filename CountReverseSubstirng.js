function countReverseSubstrings(s, k) {
  let count = 0;

  // Iterate through the string to find all substrings of length k
  for (let i = 0; i <= s.length - k; i++) {
    // Extract the substring of length k
    let substring = s.substring(i, i + k);
    // Reverse the substring
    let reversedSubstring = substring.split("").reverse().join("");
    // Form the new string
    let newString = s.substring(0, i) + reversedSubstring + s.substring(i + k);
    // Compare the new string with the original string
    if (newString < s) {
      count++;
    }
  }

  return count;
}

// Example usage:
let s = "fgazcbdfge";
let k = 3;
console.log(countReverseSubstrings(s, k)); // Output: number of valid reversals
