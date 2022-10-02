"use strict";

//Given a string of words or phrases, count the number of vowels...

const str1 = "Hello World";

// METHOD 1-----
const vowelCounter1 = function (string) {
  // Remove spaces and upperCase...
  let stringNoSpaces = string.toLowerCase().split(" ").join("");
  console.log(stringNoSpaces);

  // Iterate thru string and count vowels...
  let counter = 0;
  for (const letter of stringNoSpaces) {
    console.log(letter);
    console.log(counter);
    switch (letter) {
      case "a":
        counter++;
        break;
      case "e":
        counter++;
        break;
      case "i":
        counter++;
        break;
      case "o":
        counter++;
        break;
      case "u":
        counter++;
        break;
    }
  }
  return `The string as ${counter} vowels`;
};

// METHOD 2-----
const vowelCounter2 = function (string) {
  let count = 0;
  const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']

  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;
  return count;
};

vowelCounter1(str1);
console.log(vowelCounter2(str1));
