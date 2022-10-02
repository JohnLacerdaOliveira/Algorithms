"use strict";

// DIFF 2 ARRAYS

//This algorithm is about to compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

const testarr1 = [1, 2, 3, 5];
const testarr2 = [1, 2, 3, 4, 5];

const testarr3 = ["grass", "dirt", "pink wool", "dead shrub"];
const testarr4 = ["grass", "dirt", "dead shrub"];

const testarr5 = [
  "diorite",
  "andesite",
  "grass",
  "dirt",
  "pink wool",
  "dead shrub",
];
const testarr6 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

function diffArray(arr1, arr2) {
  // achar o maior dos arrays...
  if (arr1.length > arr2.length) {
  } else {
    [arr1, arr2] = [arr2, arr1];
  }
  // Declare array to be returned...
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        counter++;
      } else {
        break;
      }
      if (counter === arr2.length) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}

console.log(diffArray(testarr5, testarr6));
