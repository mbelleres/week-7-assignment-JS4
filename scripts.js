// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let difference = ages[ages.length - 1] - ages[0];
console.log(difference);

// Adding a new age and repeating the subtraction
ages.push(55); // Example: Adding age 55
difference = ages[ages.length - 1] - ages[0];
console.log(difference);

// Calculate the average age:
let totalAge = 0;
for (let age of ages) {
    totalAge += age;
}
let averageAge = totalAge / ages.length;
console.log(averageAge);

// Average number of letters per name and concatenate names:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
let concatenatedNames = '';

for (let name of names) {
    totalLetters += name.length;
    concatenatedNames += name + ' ';
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);
console.log(concatenatedNames.trim());

// Accessing elements in an array:
// Last element: array[array.length - 1]
// First element: array[0]
// Create a nameLengths array: 
let nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length);
}
console.log(nameLengths);

// Calculate the sum of all elements in the 'nameLengths' array:
let sumOfLengths = 0;
for (let length of nameLengths) {
    sumOfLengths += length;
}
console.log(sumOfLengths);

// Function to concatenate a word n times:
function repeatWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

// Function to return a full name:
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

// Function to check if the sum is greater than 100:
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum > 100;
}

// Function to calculate the average of numbers in an array:
function average(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

// Function to compare averages of two arrays:
function isFirstAverageGreater(firstArray, secondArray) {
    return average(firstArray) > average(secondArray);
}

// Function for buying a drink based on conditions:
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Create a function of your own:
// Example function that checks if an array is strictly increasing:
// This function checks if the given array of numbers is strictly increasing,
// meaning each number is greater than the previous one.
// Created to help identify trends in datasets, such as sales data or stock prices.
function isStrictlyIncreasing(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i + 1]) {
            return false;
        }
    }
    return true;
}
