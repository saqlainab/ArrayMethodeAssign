// Remove negative numbers from an array using filter
var numbersArray = [1, -2, 3, -4, 5, -6];
var filteredArray = numbersArray.filter(function (num) { return num >= 0; });
console.log("Filtered array (no negative numbers):", filteredArray);
// Multiply each number by 2 using map
var originalArray = [1, 2, 3, 4, 5];
var doubledArray = originalArray.map(function (num) { return num * 2; });
console.log("Doubled array:", doubledArray);
// Filter fruits with more than 5 characters using filter
var fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
var longFruitsArray = fruitsArray.filter(function (fruit) { return fruit.length > 5; });
console.log("Fruits with more than 5 characters:", longFruitsArray);
// Square of even numbers using map and filter
var numbersToSquare = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var squaredEvenNumbers = numbersToSquare
    .filter(function (num) { return num % 2 === 0; })
    .map(function (num) { return Math.pow(num, 2); });
console.log("Squared even numbers:", squaredEvenNumbers);
// Convert temperatures to Fahrenheit using map
var celsiusTemperatures = [0, 10, 20, 30, 40];
var fahrenheitTemperatures = celsiusTemperatures.map(function (temp) { return (temp * 9) / 5 + 32; });
console.log("Fahrenheit temperatures:", fahrenheitTemperatures);
// Double values of odd numbers using map and filter
var oddNumbersArray = [3, 6, 9, 12, 15, 18];
var doubledOddNumbers = oddNumbersArray
    .filter(function (num) { return num % 2 !== 0; })
    .map(function (num) { return num * 2; });
console.log("Doubled values of odd numbers:", doubledOddNumbers);
// Log names with an exclamation mark using forEach
var namesArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
namesArray.forEach(function (name) {
    console.log(name + "!");
});
