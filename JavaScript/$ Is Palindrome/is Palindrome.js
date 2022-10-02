"use strict";

// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

const str1 = "racecar";
const str2 = "redivider";
const str3 = "Rats live on no evil star";
const str4 = "Was it a car or a cat I saw";

// Is not Palindrome
const str5 = "Some written Bullshit";

// // CODE BASE FROM "stringReversal" ALGORITHM...
// const stringReversal = function (string) {
//   return string.split("").reverse().join("");
// };

// STEP1 - TEST WORDS

// Remove upperCase...
const stringReversal = function (string) {
  return string.toLowerCase().split("").reverse().join("");
};

const isPalindrome1 = function (string) {
  let answer = "no";

  if (string === stringReversal(string)) {
    answer = "yes";
  }
  return answer;
};

// STEP 2 - TEST PHRASES

// UpperCase and space removal...
const treatedString = function (string) {
  let newString = string.toLowerCase().split(" ").join("");
  return newString;
};
const isPalindrome2 = function (string) {
  let answer = "no";

  if (treatedString(string) === stringReversal(treatedString(string))) {
    answer = "yes";
  }
  return answer;
};

console.log(stringReversal(str4));

console.log(isPalindrome2(str5));
console.log(treatedString(str4));
