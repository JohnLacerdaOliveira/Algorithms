"use strict";

const arr = [9, 8, 7, 6, 4, 2, 1, 3];
const n = arr.length;

//* Iterating...
function rotate1(arr, n) {
  const temp = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}

//* Using the spread operator...
function rotate2(arr, n) {
  const rotatedArray = [arr[n - 1], ...arr];
  console.log(rotatedArray.pop());
  return rotatedArray;
}

// console.log(rotate1(arr, n));
console.log(rotate2(arr, n));
