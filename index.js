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
// let num = 3;
// if(num % 3 == 0)
// {
//     console.log(num);
// }

// for (let count = 1; count <= 17; count++) {
//     if(count % 3 == 0){
//         console.log(count);
//     }
// }

// # Exercises: Loops
// ## Log every number from 0 to 10
// for (let count = 0; count <= 10; count++) {
//     console.log(count);
// }

// ## Log every number from 4 to -16
// for (let count = 4; count >= -16; count--) {
//     console.log(count);
// }

// ## Log every fourth number from 8 to 41
// for (let count = 8; count <= 41; count+=4) {
//     console.log(count);
// }

// ## The Classic `Fizzbuzz` Program

// Loop from 0 to 100.

// - If the number is evenly divisible by 3, log `"Fizz"`
// - If the number is evenly divisible by 5, log `"buzz"`
// - If the number is evenly divisible by both 3 and 5, log `"Fizzbuzz"`
// for (let count = 0; count <= 100; count++) {
//     if(count % 3 == 0 && count % 5 == 0) console.log(count + " Fizzbuzz");
//     else if(count % 3 == 0) console.log(count + " Fizz");
//     else if(count % 5 == 0) console.log(count + " buzz");
// }

// let myNumbers = [3, 4];
// myNumbers.push(5);
// console.log(myNumbers);
// myNumbers.unshift(2);
// console.log(myNumbers);

//Starting with an empty array called `rainbowColors`:
// - Add `"orange"` to the end of the array
// - Add `"red"` to the start of the array
// - Add `"yellow"` to the end
// - Add `"green"`, `"blue"`, `"indigo"`, and `"violet"` to the end of the array
//   - **Bonus**: Do this using _one_ method
// - Log out the length of the array
// - Log out the second item
// - Log out the last item (make this flexible/dynamic!)
// - Log out the index of the string `"blue"`
// - Bonus: Find out the difference between `.slice` and `.splice`
//   - Create an array called `twoColors` using one method - don't change the `rainbowColors` array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
//   - Starting with this array `const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`, remove the duplicates **destructively** using _slice_ or _splice_ (whichever one is appropriate)
// - Bonus: Work with arrays of arrays
//   - Starting with this array `const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];`
//   - Access `"inner array first item"` and print it out
//   - Print `"third"` by using a dynamic index
//   - **Bonus**: Loop through the second inner array! Print out the first item, the second item, then the third item

// let rainbowColors =[];
// rainbowColors.push("red", "green", "orange", "yellow", "green", "blue", "indigo", "violet")
// console.log(rainbowColors);
// console.log(rainbowColors.length);
// console.log(rainbowColors[rainbowColors.length - 1])
// console.log(rainbowColors.indexOf("blue"))
 
// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
// ];
//     for ( let i = 0; i < marxFamily.length; i++) {
//     const brother = marxFamily[i];
//     console.log(brother.name, brother.birthYear);
//     }

// # Exercises: Objects

// ## The Reading List

// Keep track of which books you have read and which books you want to read!

// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
// - Iterate through that array of books
//   - For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
// - Now use an if/else statement to change the output depending on whether you read it yet or not.
//   - If you have read it, log a string like `'You have already read "Sapiens", by Yuval Noah Harari'`
//   - If not, log a string like `'You still need to read "A Life on Our Planet", by David Attenborough.'`"

const readingList = [
    {title: "Buku", author: "by orang", alreadyRead: true},
    {title: "Buku Meow", author: "by orang kucing", alreadyRead: false},
    {title: "Buku Entahla", author: "by meow", alreadyRead: true}
]

readingList.forEach(e => {
    if(e.alreadyRead) console.log(`You have already read \"${e.title}\", ${e.author}`)
    else console.log(`You still need to read read \"${e.title}\", ${e.author}`)
});

// ## The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings, and ingredients (an array of strings).

// On separate lines log the recipe information so it looks like this:

// ```raw
// Ginger, Apple and Banana Smoothie

// Serves: 2

// Ingredients:

// - 500ml Milk
// - 2/3 cups of vanilla protein powder
// - 2 tbs rolled oats
// - Pinch of cinnamon
// - 2 cups of baby spinach leaves
// - 2 frozen bananas
// - 2 roughly chopped apples
// - 1/2 avocado
// - 2 tsp fresh ginger
// - 6 ice cubes
// ```

// Note: That is actually a very nice smoothie

// const recipeCard = [
//     {
//         title: "Ginger, Apple and Banana Smoothie", 
//         serving: 2, 
//         ingredients: 
//         [
//             "- 500ml Milk\n",
//             "- 2/3 cups of vanilla protein powder\n",
//             "- 2 tbs rolled oats\n",
//             "- Pinch of cinnamon\n",
//             "- 2 cups of baby spinach leaves\n",
//             "- 2 frozen bananas\n",
//             "- 2 roughly chopped apples\n",
//             "- 1/2 avocado\n",
//             "- 2 tsp fresh ginger\n",
//             "- 6 ice cubes\n"]},
// ]

// recipeCard.forEach(e => {
//     console.log(`Title\n${e.title}\n\nServes: ${e.serving}\n\n Ingredients:\n${e.ingredients.join("")}`);
// });

// ## The Movie Database

// It's like IMDB, but much much smaller!

// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).
// - Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
//   - Maybe the [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method will be helpful

// const movieDb = [
//     {
//         title: "Movie 1",
//         duration: 3,
//         director: "Guy",
//         stars: []
//     }
// ]

