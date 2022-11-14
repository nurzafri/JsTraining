// function scoreGame() {
//   let score = 0;
//   return function scoreSum() {
//     console.log(score);
//     score += 1;
//     console.log(score);
//   };
// }

// let latestScore = scoreGame();
// let score = 0;
// console.log(score);

// function add1(a, b) {
//   return a + b;
// }
// console.log(add1(1, 2, 3, 4, 5));

// function add(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     sum += nums[i];
//   }
//   return sum;
// }
// console.log(add(1, 2, 3, 4, 5));

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i], i);
//   }
// }
// function handler(item, index) {
//   console.log(item, index);
// }
// forEach(["one", "two", "three"], handler);

// forEach(["one", "two", "three"], function (item, index) {
//   console.log(item, index);
// });

// let letters = ["a", "b", "c", "d", "e"];
// function processLetter(letter, index) {
//   let message = "Current Letter: " + letter + ". Index: " + index;
//   console.log(message);
// }
// letters.forEach(processLetter);

// let index = 0;
// letters.forEach((element) => {
//   let message = "Current Letter: " + element + ". Index: " + index;
//   index++;
//   console.log(message);
// });

// let numbers = [1, 2, 3, 4, 5, 6];
// function isEven(num) {
//   return num % 2 === 0;
// }
// let evens = numbers.filter(isEven);
// console.log(evens);

// let arr = "aBcDeFg".split("");
// let filteredCapitalLetter = arr.filter((element) => {
//   console.log(element === element.toUpperCase());
//   return element === element.toUpperCase();
// });
// console.log(filteredCapitalLetter);

// let letters = ["a", "b", "c", "d", "e"];
// function uppercaseLetter(letter) {
//   return letter.toUpperCase();
// }
// let upperCased = letters.map(uppercaseLetter);
// console.log(upperCased);

// let nums = [1, 2, 3, 4, 5, 6];
// function addNumbersTogether(currentTotal, currentNumber) {
//   let newTotal = currentTotal + currentNumber;
//   return newTotal;
// }
// let total = nums.reduce(addNumbersTogether, 0);
// console.log(total);

// JavaScript Iterators
// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter
// onlyEven([1,2,3,4,5,6,7]) // => [2,4,6]
let num = [1, 2, 3, 4, 5, 6, 7];
let arrEven = [];
let useForEach = num.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
    arrEven.push(element);
  }
});
console.log(arrEven);

let useFilter = num.filter((element) => {
  return element % 2 === 0;
});
console.log(useFilter);

// .forEach() or .filter()
// countIntegers – counts how many integers there are in an array
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript

let num2 = [4, 2.2, 5, 6, 4.2, 8.2, 4];
let count = 0;
let useForEach2 = num2.forEach((element) => {
  if (Number.isInteger(element)) {
    count++;
  }
});
console.log(count);

let useFilter2 = num2.filter((element) => {
  return Number.isInteger(element);
});
console.log(useFilter2.length);

// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map
// lengths(['my', 'cake', 'pudding']); // => [2,4,7]
let arrStr = ["my", "cake", "pudding"];
function getLengthString(str) {
  return str.length;
}
let lengthStr = arrStr.map(getLengthString);
console.log(lengthStr);

// .map()
// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]
let num3 = [1, 2, 3, 4, 5];
let arrResult = [];
let result = num3.forEach((element) => {
  arrResult.push(Math.pow(element, 2));
});
console.log(arrResult);

function getSquare(num) {
  return Math.pow(num, 2);
}
let square = num3.map(getSquare);
console.log(square);

// .map(), .filter() & .reduce()
// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.
// var inventory = [
//   {type:   "machine", value: 5000},
//   {type:   "machine", value:  650},
//   {type:      "duck", value:   10},
//   {type: "furniture", value: 1200},
//   {type:   "machine", value:   77}
// ]
// Get an array of all the machines with value over 500

var inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];

function totalValue(inventory) {
  let totalValue = inventory
    .filter((item) => item.type === "machine")
    .reduce((total, machine) => {
      return (total += machine.value);
    }, 0);
  return totalValue;
}

// function totalValue(inventory) {
//   let totalValue = inventory
//     .filter((item) => item.type === "machine")
//     .reduce((total, machine) => {
//       return (total += machine.value);
//     }, 0);
//   return totalValue;
// }
console.log(totalValue(inventory));

let getMachineOnly = inventory.filter((element) => {
  return element.type === "machine";
});
console.log(getMachineOnly);

let getMachineOnlyOver500 = getMachineOnly.filter((element) => {
  return element.type === "machine" && element.value > 500;
});
console.log(getMachineOnlyOver500);
