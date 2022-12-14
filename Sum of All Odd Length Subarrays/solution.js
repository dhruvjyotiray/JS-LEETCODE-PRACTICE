// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

// Example:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let k,
    total = 0;

  for (let i = 1; i <= arr.length; i += 2) {
    k = i;
    for (let j = 0; j < arr.length; j++) {
      total += arr.slice(j, k).reduce((a, b) => {
        return a + b;
      }, 0);

      k++;
      if (k > arr.length) {
        break;
      }
    }
  }
  return total;
};
