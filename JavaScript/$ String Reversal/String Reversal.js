"use strict";

//Given a string of characters as input, write a function that returns it with the characters reversed...

const string1 = "AllThe-small Things";
const string2 = "This Is Spinal Tap";
const string3 = "All All";

// USING ARRAY METHODS...
const stringReversal1 = function (string) {
  return string.split("").reverse().join("");
};

// DECONSTRUCTING THE METHODS STEP BY STEP...
const stringReversal2 = function (string) {
  const arr = [];
  // Convert string to array...
  for (let i = 0; i < string.length; i++) {
    arr.push(string.charAt(i));
  }

  let start = 0;
  let end = string.length - 1;
  // Reverse array 'in-Place'...
  while (start < end) {
    let temp = "";
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  let counter = 0;
  let finalString = "";
  // Join array elements into final string...
  while (counter < string.length) {
    finalString += arr[counter];
    counter++;
  }
  return finalString;
};

console.log(stringReversal1(string2));
console.log(stringReversal2(string2));
