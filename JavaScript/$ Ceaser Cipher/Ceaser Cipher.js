"use strict";

//Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

const str1 = "Uma frase sim.pl/es";
const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];

const ceaserCypher = function (string, shiftValue) {
  // Filter non valid shiftValue input...
  let indexShift = 0;
  if (Number(shiftValue) == shiftValue || Number.isInteger(shiftValue)) {
    indexShift = Number(shiftValue);
  } else {
    return "Not a valid input";
  }

  console.log(indexShift);
  // Create array of upperCase letter positions...
  const upperCasePositions = [];
  let counter = 0;
  for (const letter of string) {
    // Filter out non letters...
    if (
      letter.toUpperCase() === letter &&
      letter.toLowerCase() !== letter.toUpperCase()
    ) {
      upperCasePositions[counter] = 1;
    } else {
      upperCasePositions[counter] = 0;
    }
    counter++;
  }
  console.log(upperCasePositions);
  // LowerCase string...
  const lowerCaseString = string.toLowerCase();

  console.log(lowerCaseString);

  // Create array of string letter indexes...
  const indexArray = [];
  for (const letter of lowerCaseString) {
    indexArray.push(letterArray.indexOf(letter));
  }

  console.log(indexArray);

  // Increment by 'shiftValue' amount each element of original letter indexes
  const ceaserArray = [];
  for (const index in indexArray) {
    // Shift amount can't be greater than the size of the letterArray...
    const ceaserLetterPosition =
      (indexArray[index] + indexShift) % letterArray.length;
    console.log(ceaserLetterPosition);
    ceaserArray.push(letterArray[ceaserLetterPosition]);
    console.log(ceaserArray);
  }
  // Uppercase letters...
  for (const position in ceaserArray) {
    console.log(position);
    if (upperCasePositions[position] === 1) {
      ceaserArray[position] = ceaserArray[position].toUpperCase();
    }
  }
  console.log(ceaserArray);
  const ceaserString = ceaserArray.join("");
  console.log(ceaserString);
  return ceaserString;
};

console.log(ceaserCypher(str1, 26));
