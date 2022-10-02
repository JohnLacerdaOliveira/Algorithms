"use strict";

//! Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order

const arr = [0, 2, 1, 2, 0];
const n = 5;

//* Method 1 (NOT VALID => too slow)...
function mt1Sort012(arr, n) {
  const sortArr = arr.sort((a, b) => a - b);
  return sortArr;
}

// console.log(mt1Sort012(arr, n));

//* Method 2 (NOT VALID => array has to be sorted in place)...
function mt2Sort012(arr, n) {
  const sortArr = [];
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  // Count occurences of each number...
  for (const elem of arr) {
    console.log(elem);
    switch (elem) {
      case 0:
        count0++;
        break;
      case 1:
        count1++;
        break;
      case 2:
        count2++;
        break;
    }
  }
  // Push number of occcurences of each number to new array
  while (count0 > 0) {
    sortArr.push(0);
    count0--;
  }
  while (count1 > 0) {
    sortArr.push(1);
    count1--;
  }
  while (count2 > 0) {
    sortArr.push(2);
    count2--;
  }
  return sortArr;
}

console.log(mt2Sort012(arr, n));
