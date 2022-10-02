"use strict";

//Given an array of items, reverse the order...

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const arrayReverse = function (array) {
  let newArray = [];
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let temp = array[start];
    newArray[start] = array[end];
    newArray[end] = temp;

    console.log(newArray);
    start++;
    end--;
  }
  return newArray;
};

// Try usind destructuring assignment... ?

// FIXME

console.log(arrayReverse(arr1));
console.log(arr1.reverse());
