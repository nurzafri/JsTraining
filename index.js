//Summing of 2 + 3//
//console.log(2 + 3);

//console.log(undefined);
//console.log(null);

//array
console.log(["a", "b", "c"])

//object
console.log({courseName : "JavaScript"})

let message; // Declaration​
let animal;
animal = "Orca"; // Assignment​
// Declaration and Assignment (suggested approach)  let course = "JavaScript Development";​
let alphabet = [ "a", "b", "c" ];

animal = "Orca";  animal = "Wolf";
let favouriteNumber = 1;  favouriteNumber = 42;

// JavaScript is a dynamic programming language​
// Which means they can change types too!​
let myVariable = null;
console.log(myVariable);
myVariable = 10;
console.log(myVariable);
myVariable = "String";
console.log(myVariable);
myVariable = false;
console.log(myVariable);
myVariable = [];
console.log(myVariable);

const MYNUMBER = 42;
console.log(MYNUMBER);

console.log("Exercise-------")
//1. Convert a string into a number (e.g. `"4"` into `4`)?
let numberString = "4";
console.log(parseInt(numberString))
//2. Convert a number into a string (e.g. `15` into `"15"`)?
let number = 15;
console.log(number.toString());
//3. Make a string uppercased (e.g. `"hello"` into `"HELLO"`)?
let helloLowerCase = "hello";
console.log(helloLowerCase.toUpperCase());
//4. Get the second character out of a string (e.g.`"hello"` returns `"e"`)?
let helloString = "hello";
console.log(helloString.charAt(1));
//5. Use concatenation to combine two strings (e.g. join `"Hello "` and `"World"`)?
let helloWorld = "Hello" + "World";
console.log(helloWorld)
//6. Get a number and square it (e.g. `4` squared is `16`)?
let num = 4;
console.log(Math.pow(4,2))
//7. Get the square root of a number (e.g. square root of `25` is `5`)?
let squareRoot = 25;
console.log(Math.sqrt(25))