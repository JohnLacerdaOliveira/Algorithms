"use strict";

const arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];
const n = 10;

//! Version 1--------------------------------------------
function missingNumber1(array, n) {
  // Create ordered array of an numbers 1 => N+1 (POINTELESS can just use counter of loop)...
  const testArr = [];
  for (let i = 1; i < n + 1; i++) testArr.push(i);

  // Sorted provided array...
  array.sort((a, b) => a - b);

  for (let index in arr) {
    let missingNum = 0;
    if (array[index] !== testArr[index]) {
      return testArr[index];
    }
  }
}
//! Version 2----------------------------------------------
function missingNumber2(array, n) {
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 1; i < n + 1; i++) {
    if (i !== sortedArray[i - 1]) {
      return i;
    }
  }
}
console.log(missingNumber1(arr, n));
console.log(missingNumber2(arr, n));
