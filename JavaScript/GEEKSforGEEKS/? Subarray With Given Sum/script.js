"use strict";
const arr = [1, 2, 3, 7, 5];
const n = 5;
const s = 12;

//! works in vsCode but not on site-----
function subarraySum(arr, n, s) {
  // Iterate thru each starting position of the array...
  for (let index in arr) {
    const sumArray = [];
    let sum = 0;
    // Iterate elements from incremented start position to arr.length...
    for (let i = index; i < n - 1; i++) {
      // Add each consective element...
      sum += arr[Number(i)];
      // If sum total === targetSum create array with first and last index of the summ...
      if (sum === s) {
        sumArray[0] = Number(index) + 1;
        sumArray[1] = i + 1;
        return sumArray.join(" ");

        // Breal out of the loop if total > target sum...
      } else if (sum > s) {
        break;
      }
    }
  }
}

console.log(subarraySum(arr, n, s));
