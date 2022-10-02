"use strict";

//Given a string of characters, return the character that appears the most often...

const string1 = "tINdGCvDtuZMdpTJKynN";
const string2 = "HyXjVmzWyEgLgnRNbnuq";
const string3 = "Hello World";

const lettersObj = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

// ITERATING THRU A CHARACTER LIST

const maxCharacter = function (string) {
  // Transform string to lowerCase and remove spaces...
  const lowerCase = string.toLowerCase().split(" ").join("");

  // iterate thru the string & increment value pair for each key letter in the phrase...
  for (let i = 0; i < string.length - 1; i++) {
    const letter = lowerCase[i];
    console.log(letter);
    console.log((lettersObj[letter] += 1));
  }
  let maxValue = 0;
  let maxCharacter = "";
  //WHAT TO DO WHEN THERE'S A TIE FOR MOST COUNTED WORD ??
  // Iterate thru the characters object to find highest count letter...
  for (const letter in lettersObj) {
    if (lettersObj[letter] > maxValue) {
      maxValue = lettersObj[letter];
      maxCharacter = letter;
    }
    console.log(maxValue);
    console.log(letter);
  }
  return maxCharacter;
};

console.log(maxCharacter(string3));
console.log(lettersObj);

// ITERATING ONLY THRU THE STRING ITSSELF
