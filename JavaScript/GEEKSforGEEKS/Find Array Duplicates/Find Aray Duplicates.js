"use strict";

const arr = [2, 3, 1, 2, 3];

//! Version 1--------------------------------------
const duplicates1 = function (a, n) {
  let duplicatesArr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === a[i]) {
        duplicatesArr.push(a[j]);
      }
    }
  }
  if (duplicatesArr.length > 0) {
    return duplicatesArr.join(" ");
  } else {
    return -1;
  }
};
console.log(duplicates1(arr));

//! Version 2-------------------------------------
const duplicates2 = function (a, n) {
  a.sort((aa, bb) => aa - bb);
  console.log(a);
  let duplicatesArr = [];
  for (const elem in a) {
    if (a[elem - 1] === a[elem]) {
      duplicatesArr.push(a[elem - 1]);
    }
  }
  if (duplicatesArr.length === 0) {
    duplicatesArr = -1;
  }
  return duplicatesArr.join("");
};
console.log(duplicates2(arr));
