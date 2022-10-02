"use strict";

//Given a phrase, reverse the order of the characters of each word...

const str1 = "The quick brown fox jumps over the lazy dog.";

// USING A WHILE LOOP-----
const reverseWords1 = function (string) {
  let stringArray = string.split(" ");
  console.log(stringArray);

  let newArray = [];
  let start = 0;
  let end = stringArray.length - 1;

  while (start <= end) {
    let temp = stringArray[start];
    newArray[start] = stringArray[end];
    newArray[end] = temp;

    start++;
    end--;
  }
  return newArray.join(" ");
};

// USING REVERSE ITERATION-----
const reverseWords2 = function (string) {
  let stringArray = string.split(" ");
  console.log(stringArray);

  let newArray = [];
  let counter = 0;
  for (let i = stringArray.length - 1; i >= 0; i--) {
    console.log((newArray[counter] = stringArray[i]));
    counter++;
  }
  return newArray.join(" ");
};

console.log(reverseWords1(str1));
console.log(reverseWords2(str1));
