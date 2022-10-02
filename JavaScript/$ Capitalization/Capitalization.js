"use strict";

//Given a phrase, capitalize every word...

const str1 = "hello world hello world";

const Capitalize = function (string) {
  let wordArray = string.split(" ");
  let newArray = [];
  let counter = 0;
  console.log(typeof wordArray[1]);

  for (let word of wordArray) {
    newArray[counter] = word.replace(word[0], word[0].toUpperCase());
    counter++;
  }

  return newArray.join(" ");
};

console.log(Capitalize(str1));
