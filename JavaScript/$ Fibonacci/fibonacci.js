"use strict";

console.log(fibonacci(55));

function fibonacci(n) {
  let arr = [0, 1];
  let number = 0;
  for (let i = 2; i <= n; i++) {
    number = arr[i - 2] + arr[i - 1];
    arr.push(number);
    console.log(arr);
  }
  return arr.pop();
}
