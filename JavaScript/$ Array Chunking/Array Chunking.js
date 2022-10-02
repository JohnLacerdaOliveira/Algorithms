"use strict";

//Given an array and a size, split the array items into a list of arrays of the given size...

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// FOR LOOP-----
function arrayChunking1(array, size) {
  let chunkedArray = [];
  let index = 0;
  for (let i = 0; i < array.length; i += size) {
    chunkedArray[index] = array.slice(i, i + size);
    index++;
  }
  return chunkedArray;
}

// WHILE LOOP-----
function arrayChunking2(array, size) {
  let chunkedArray = [];
  let increment = 0;
  let index = 0;
  while (increment < array.length) {
    chunkedArray[index] = array.slice(increment, increment + size);
    increment += size;
    index++;
  }
  return chunkedArray;
}

console.log(arrayChunking1(arr1, 4));
console.log(arrayChunking2(arr1, 4));
