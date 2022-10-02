"use strict";

//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”...

const int1 = 10;
const int2 = 100;
const int3 = 1000;
const int4 = 10000;

const fizzBuzz = function (integer) {
  let counter = integer;
  // For curiosity a FIZZ BUZZ counter was added...
  let doubleCounter = 0;

  while (counter >= 1) {
    if (counter % 2 === 0 && counter % 3 === 0) {
      console.log(counter, "FIZZ BUZZ");
      doubleCounter++;
    } else if (counter % 2 === 0) {
      console.log(counter, "FIZZ");
    } else if (counter % 3 === 0 && counter % 3 === 0) {
      console.log(counter, "BUZZ");
    } else {
      console.log(counter);
    }
    counter--;
  }
  console.log(`There are ${doubleCounter} FIZZ BUZZ's in the integer !!`);
};
console.log(fizzBuzz(int4));
