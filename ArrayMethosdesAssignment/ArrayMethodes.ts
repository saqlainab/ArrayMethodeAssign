// Remove negative numbers from an array using filter
const numbersArray = [1, -2, 3, -4, 5, -6];
const filteredArray = numbersArray.filter((num) => num >= 0);
console.log("Filtered array (no negative numbers):", filteredArray);

// Multiply each number by 2 using map
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((num) => num * 2);
console.log("Doubled array:", doubledArray);

// Filter fruits with more than 5 characters using filter
const fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
const longFruitsArray = fruitsArray.filter((fruit) => fruit.length > 5);
console.log("Fruits with more than 5 characters:", longFruitsArray);

// Square of even numbers using map and filter
const numbersToSquare = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredEvenNumbers = numbersToSquare
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 2);
console.log("Squared even numbers:", squaredEvenNumbers);

// Convert temperatures to Fahrenheit using map
const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(
  (temp) => (temp * 9) / 5 + 32
);
console.log("Fahrenheit temperatures:", fahrenheitTemperatures);

// Double values of odd numbers using map and filter
const oddNumbersArray = [3, 6, 9, 12, 15, 18];
const doubledOddNumbers = oddNumbersArray
  .filter((num) => num % 2 !== 0)
  .map((num) => num * 2);
console.log("Doubled values of odd numbers:", doubledOddNumbers);

// Log names with an exclamation mark using forEach
const namesArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
namesArray.forEach((name) => {
  console.log(name + "!");
});
