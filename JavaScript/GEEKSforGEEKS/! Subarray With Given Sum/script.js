"use strict";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  n = 10,
  s = 15;

function subarraySum(arr, n, s) {
  for (let index in arr) {
    const sumArray = [];
    let sum = 0;
    console.log(index);
    for (let i = index; i < n - 1; i++) {
      console.log(i);
      sum += arr[Number(i)];
      console.log(sum);
      if (sum === s) {
        sumArray[0] = Number(index);
        sumArray[1] = i;
        console.log(sumArray);
        return sumArray.join("");
      } else if (sum > s) {
        break;
      }
    }
  }
}

console.log(subarraySum(arr, n, s));

const arr2 = [
  135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28,
  37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 172, 139, 70, 113,
  68, 100, 36, 95, 104, 12, 123, 134,
];
const n2 = 42;
const s2 = 468;

console.log(subarraySum(arr2, n2, s2));
