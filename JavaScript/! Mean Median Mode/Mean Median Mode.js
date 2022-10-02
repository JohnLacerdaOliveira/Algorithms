"use strict";

const numberArray = [2, 5, 18, 48, 3, 1, 57, 3, 1];

const meanMedianMode = function (numArr) {
  let meanMedianMode = [];

  // MEAN-----
  let arrSum = 0;
  for (let number of numArr) {
    arrSum += number;
  }
  meanMedianMode.push(arrSum / numArr.length);

  // MEDIAN-----
  let median = 0;
  const sortedArray = numArr.sort((a, b) => a - b);
  let halfArray = sortedArray.length / 2;

  if (sortedArray.length % 2 !== 0) {
    median = sortedArray[Math.floor(halfArray)];
  } else {
    median = (sortedArray[halfArray - 1] + sortedArray[halfArray + 1]) / 2;
    console.log(median);
  }
  meanMedianMode.push(median);

  // MODE-----
  let mode = 0;

  return meanMedianMode;
};

console.log(meanMedianMode(numberArray));
