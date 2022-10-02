"use strict";

//Given an integer, reverse the order of the digits...

const int1 = 12345;
const int2 = -12345;
const int3 = "23456";
const int4 = "-23456";

const integerReverse1 = function (integer) {
  // Save positive / negativeinfo & convert any input to number(not necessary - Math. finction does the conversion already)...
  const isPositive = Math.sign(Number(integer)) === 1 ? true : false;
  let stringInt = "";

  // If positive do reversal / if negative add '-' on start and do reversal...
  if (isPositive === true) {
    stringInt = parseInt(integer.toString().split("").reverse().join(""));
  } else {
    stringInt = parseInt("-" + integer.toString().split("").reverse().join(""));
  }
  return stringInt;
};

/*
const integerReverse = function (integer) {
  // Save positive / negative info...
  const isPositive = Math.sign(integer) === 1 ? true : false;
  console.log(isPositive);

  // Convert to string...
  let string = integer.toString();

  let start = 0;
  let end = string.length - 1;
  // Invert string...
  return string.;

  //   while (start < end) {
  //     let temp = string.charAt(start);
  //     string[start] = string[end];
  //     start++;
  //     end--;
  //   }

  // Convert back to Integer...
};
*/
console.log(integerReverse1(int4));
