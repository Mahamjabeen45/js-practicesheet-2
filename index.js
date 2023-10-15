//Task 1 filter even numbers
// Initialize an array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Create an empty array to store the filtered numbers
// let filteredNumbers = [];

// // Use a loop to filter out even numbers and store them in the new array
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         filteredNumbers.push(numbers[i]);
//     }
// }

// // Display the new array
// console.log(filteredNumbers);


//Task 2 sum of odd numbers
// Initialize an array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Initialize a variable to store the sum of odd numbers
// let sumOfOddNumbers = 0;

// // Use a loop to iterate through the numbers array
// for (let i = 0; i < numbers.length; i++) {
//     // Check if the current number is odd
//     if (numbers[i] % 2 !== 0) {
//         // If the number is odd, add it to the sum of odd numbers
//         sumOfOddNumbers += numbers[i];
//     }
// }

// // Display the sum of odd numbers
// console.log("The sum of all odd numbers is: " + sumOfOddNumbers);


// Task 3 fizzBuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


//Task 4 count characters
// function countCharacters(words) {
//     let totalCharacters = 0;

//     for (let i = 0; i < words.length; i++) {
//         totalCharacters += words[i].length;
//     }

//     return totalCharacters;
// }

// let words = ["hello", "world", "fizz", "buzz"];
// console.log("Total number of characters: " + countCharacters(words));


// Task 5 find maximum length word
// let words = ["hello", "world", "fizz", "buzz", "maximumlengthword"];
// let maxLengthWord = "";

// for (let i = 0; i < words.length; i++) {
//  if (words[i].length > 0) {
//     maxLengthWord = words[i];
//  }
// }

// console.log("The word with the maximum length is: " + maxLengthWord);


// Task 6 remove short words
// let words = ["hi", "world", "by", "buzz", "maximumlengthword"];

// for (let i = 0; i < words.length; i++) {
//  if (words[i].length < 3) {
//     words.splice(i, 1);
//  }
// }

// console.log(words);


// Task 7 multiplication table
// let number = prompt("Enter a number: ");

// if (isNaN(number) || number < 1) {
//  alert("Invalid input. Please enter a positive integer.");
// } else {
//  let table = "";

//  for (let i = 1; i <= 10; i++) {
//     table += number + " x " + i + " = " + number * i + "\n";
//  }

//  alert("Multiplication Table for " + number + ":\n\n" + table);
// }
// // `\n` escape sequence to represent a newline character in the string and displayed multiplication result on a new line in the alert box.
// // check if the input is a valid positive integer using the `isNaN()` function 


// Task 8 Array Sorting
// let numbers = [45, 23, 12, 89, 56, 34, 90];
// let temp=true;
// for (let i = 0; i < numbers.length; i++) {
//  for (let j = 0; j < numbers.length ; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       temp = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = temp;
//     }
//  }
// }

// console.log("Sorted array in ascending order: ", numbers);


// // Task 9 search and replace
// // Array of strings
// let array = ["apple", "banana", "cherry", "date",  "grape", "kiwi", "lemon", "mango", "nectarine", "orange", "pineapple", "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla", "watermelon"];

// // Function to search for a word and replace it with a new word
// function searchAndReplace(array, searchWord, newWord) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === searchWord) {
//             array[i] = newWord;
//             console.log(`Word "${searchWord}" found and replaced with "${newWord}".`);
//             break;
//         }
//     }
//     return array;
// }

// // Get user input for search word and new word
// let searchWord = prompt("Enter a word to search for:");
// let newWord = prompt("Enter a new word to replace the search word with:");

// // Call the function and display the updated array
// let updatedArray = searchAndReplace(array, searchWord, newWord);
// console.log("Updated array:", updatedArray);



// // Task 10 unique value
// // Create an array of numbers
// var numbers = [1, 2, 3, 4, 5, 1, 2, 3];
// // Create an empty array to store the unique values
// var uniqueValues = [];
// // Iterate over the numbers array
// for (let i = 0; i < numbers.length; i++) {
//   // Check if the current value is already in the uniqueValues array
//   let isUnique = true;
//   for (let j = 0; j < uniqueValues.length; j++) {
//     if (numbers[i] === uniqueValues[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   // If the current value is unique, add it to the uniqueValues array
//   if (isUnique) {
//     uniqueValues.push(numbers[i]);
//   }
// }
// // Display the unique values
// console.log(uniqueValues); // Output: [1, 2, 3, 4, 5]

// OR

// // Create an array of numbers
// var numbers = [1, 2, 3, 4, 5, 1, 2, 3];
// // Create a set of unique values
// var uniqueValues = new Set(numbers);
// // Display the unique values
// console.log(uniqueValues); // Output: Set { 1, 2, 3, 4, 5 }
// The `new Set()` method is a useful way to create a new Set object with the unique values from an iterable object. 

