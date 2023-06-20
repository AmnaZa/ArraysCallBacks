// Array Methods with Callbacks

// Two arrays to work with
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// First question "Determine if every number is greater than or equal to 0"
const EveryNumGreater = nums.every(num => num <= 0);
console.log(EveryNumGreater);

// Determine if every word shorter than 8 characters
const everyWordShorter = panagram.every(word => word.length < 8);
console.log(everyWordShorter);
// Filter
// Filter the array for numbers less than 4
const filteredNums = nums.filter(num => num < 4);
console.log(filteredNums);

// Filter words that have an even length
const filteredWords = panagram.filter(word => word.length % 2 === 0);
console.log(filteredWords);

// Find
// Find the first value divisible by 5
const firstDivisibleBy5 = nums.find(num => num % 5 === 0);
console.log(firstDivisibleBy5);

// Find the first word that is longer than 5 characters
const firstLongerThan5 = panagram.find(word => word.length > 5);
console.log(firstLongerThan5);

// Find Index
// Find the index of the first number that is divisible by 3
const indexDivisibleBy3 = nums.findIndex(num => num % 3 === 0);
console.log(indexDivisibleBy3);

// Find the index of the first word that is less than 2 characters long
const indexShorterThan2 = panagram.findIndex(word => word.length < 2);
console.log(indexShorterThan2);

// For Each
// Console.log each value of the nums array multiplied by 3
nums.forEach(num => console.log(num * 3));

// Console.log each word with an exclamation point at the end of it
panagram.forEach(word => console.log(word + "!"));

// Map
// Make a new array of each number multiplied by 100
const multipliedNums = nums.map(num => num * 100);
console.log(multipliedNums);

// Make a new array of all the words in all uppercase
const uppercaseWords = panagram.map(word => word.toUpperCase());
console.log(uppercaseWords);

// Some
// Find out if some numbers are divisible by 7
const someNumDivisibleBy7 = nums.some(num => num % 7 === 0);
console.log(someNumDivisibleBy7);

// Find out if some words have the letter "ain" in them
const someWordHasAin = panagram.some(word => word.includes('ain'));
console.log(someWordHasAin);
