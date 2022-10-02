/*IDEAS TO CONTINUE
1. create graphical interface
2. create sliders for percentage likelyhood of each element hapening
*/

//Variable Initialization....
var myString = '';

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbol = ['+', '-', '*', '/', '<', '>', '!', '@', '#', '$', '%', '&', '/'];
var spaces = ' '

//inAllOptions gets updated when a new dataType gets included in the string as top include that datatype by appending it to the end.
var incAllOptions = []

//Function (arguments to input are a number for length and 'YES' strings or nothing)

function randomStringGenerator(length, incUpperCase, incNumeric, incSymbol, incSpaces) {

    incAllOptions = letters;

    if (incUpperCase == 'Yes') {
        for (let i = 0; i < letters.length; i++) {

            let random = Math.random();
            if (random <= 0.5) {
                letters[i] = letters[i].toUpperCase();
            }
        }
    }

    if (incNumeric == 'Yes') {
        incAllOptions = incAllOptions.concat(numbers);
    }

    if (incSymbol == 'Yes') {
        incAllOptions = incAllOptions.concat(symbol);
    }

    if (incSpaces == 'Yes') {
        incAllOptions = incAllOptions.concat(spaces);
    }

    //The length of the string is inputed as the length argument of the if Statment
    for (let i = 0; i < length; i++) {


        //For each position of the string we run thru all of the letters array
        myString += incAllOptions[Math.ceil((Math.random()) * incAllOptions.length)];

    }
    return myString
}



//Tests...

console.log(randomStringGenerator(50, 'Yes', 'Yes', 'Yes', 'Yes'))
console.log(letters)
console.log(myString)





