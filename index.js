//Summing of 2 + 3//
//console.log(2 + 3);

//console.log(undefined);
//console.log(null);

//array
// console.log(["a", "b", "c"])

//object
// console.log({courseName : "JavaScript"})

// let message; // Declaration​
// let animal;
// animal = "Orca"; // Assignment​
// Declaration and Assignment (suggested approach)  let course = "JavaScript Development";​
// let alphabet = [ "a", "b", "c" ];

// animal = "Orca";  animal = "Wolf";
// let favouriteNumber = 1;  favouriteNumber = 42;

// JavaScript is a dynamic programming language​
// Which means they can change types too!​
// let myVariable = null;
// console.log(myVariable);
// myVariable = 10;
// console.log(myVariable);
// myVariable = "String";
// console.log(myVariable);
// myVariable = false;
// console.log(myVariable);
// myVariable = [];
// console.log(myVariable);

// const MYNUMBER = 42;
// console.log(MYNUMBER);

// console.log("====Exercise====")
//1. Convert a string into a number (e.g. `"4"` into `4`)?
// let numberString = "4";
// console.log(parseInt(numberString))
//2. Convert a number into a string (e.g. `15` into `"15"`)?
// let number = 15;
// let str = number.toString();
// console.log(str);
//3. Make a string uppercased (e.g. `"hello"` into `"HELLO"`)?
// let helloLowerCase = "hello";
// console.log(helloLowerCase.toUpperCase());
//4. Get the second character out of a string (e.g.`"hello"` returns `"e"`)?
// let helloString = "hello";
// console.log(helloString.charAt(1));
//5. Use concatenation to combine two strings (e.g. join `"Hello "` and `"World"`)?
// let helloWorld = "Hello" + "World";
// console.log(helloWorld)
//6. Get a number and square it (e.g. `4` squared is `16`)?
// let num = 4;
// console.log(Math.pow(num,2)) //Method 1
// console.log((num)**2) //Method 2
// console.log(num*num) //Method 3
//7. Get the square root of a number (e.g. square root of `25` is `5`)?
// let squareRoot = 25;
// console.log(Math.sqrt(squareRoot))

// let nombor = 4;
// if(nombor > 0)
// {
//     console.log("The number is positive")
// }
// else
// {
//     console.log("The number is negative")
// }


// let nm = prompt("Please enter your name", "Najib");
// let age = prompt("Please enter your age", 20);
// const MIN_AGE = 16;

// if (age < MIN_AGE) {
//   console.log("Sorry " + nm + ", you still have " + MIN_AGE - parseInt(age) + " years before you can drive")
// }
// else
// {
//     console.log("Drive into the sunset, " + nm +"!")
// }

// let numInit = 3
// while (numInit <= 8) {
//     console.log(numInit);
//     numInit+=1;
// }

// for (let index = 4; index >= 1 ; index--) {
//     console.log(index);
// }
let num = 3;
if(num % 3 == 0)
{
    console.log(num);
}

for (let count = 1; count <= 17; count++) {
    if(count % 3 == 0){
        console.log(count);
    }
}

// # Exercises: Loops









// ## Log every number from 0 to 10
for (let count = 0; count <= 10; count++) {
    console.log(count);
}

// ## Log every number from 4 to -16
for (let count = 4; count >= -16; count--) {
    console.log(count);
}

// ## Log every fourth number from 8 to 41
for (let count = 8; count <= 41; count+=4) {
    console.log(count);
}

// ## The Classic `Fizzbuzz` Program

// Loop from 0 to 100.

// - If the number is evenly divisible by 3, log `"Fizz"`
// - If the number is evenly divisible by 5, log `"buzz"`
// - If the number is evenly divisible by both 3 and 5, log `"Fizzbuzz"`
for (let count = 0; count <= 100; count++) {
    if(count % 3 == 0 && count % 5 == 0) console.log(count + " Fizzbuzz");
    else if(count % 3 == 0) console.log(count + " Fizz");
    else if(count % 5 == 0) console.log(count + " buzz");
}