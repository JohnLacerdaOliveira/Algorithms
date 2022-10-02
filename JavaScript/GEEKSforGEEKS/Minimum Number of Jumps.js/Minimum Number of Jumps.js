/*Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

Note: Return -1 if you can't reach the end of the array. */

const arr = [
  83, 61, 83, 12, 27, 100, 34, 0, 35, 10, 10, 96, 39, 87, 53, 5, 40, 42, 66, 15,
  90, 71, 55, 87, 39, 5, 88, 49, 97, 100, 32, 4, 60, 81, 83, 53, 80, 16, 53, 14,
  94, 29, 77, 99, 16, 29, 3, 22, 71, 35, 4, 61, 6, 25, 13, 11, 30, 0, 27, 94,
  66, 25, 64, 92, 5, 47, 44, 85, 29, 63, 65, 89, 59, 41, 87, 41, 36, 57, 29, 7,
  92, 33, 34, 64,
];

console.log(arr.length);
const minJumps = function (arr) {
  let counter = 0;
  let index = 0;

  if (arr.indexOf(0) === 0) {
    return -1;
  } else if (arr.indexOf(0) !== -1) {
    while (index <= arr.length && index <= arr.indexOf(0) - 1) {
      counter++;
      index += arr[index];
    }

    return counter;
  } else {
    while (index <= arr.length) {
      counter++;
      index += arr[index];
    }
    return counter;
  }
};

console.log(minJumps(arr));

// const minJumps = function (arr) {
//   let jumps = [];
//   for (let i = arr.lastIndexOf(0) + 1; i < arr.length; i++) {
//     let counter = 0;
//     let index = i;
//     while (index < arr.length) {
//       counter++;
//       index += arr[index];
//     }
//     jumps.push(counter);
//   }
//   console.log(jumps)
//   if (jumps.length > 0) {
//     return Math.min(...jumps);
//   } else {
//     return -1;
//   }
// };
