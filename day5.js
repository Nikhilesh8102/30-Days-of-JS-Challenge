//Day 5: Functions

//Tasks/Activities:

//Activity 1: Function Declaration

//Task 1: Write a function to check if a number is even or odd and log the result to the console.

function evenOrOdd(number) {
    console.log(`${number} is`, number % 2 === 0 ? 'even.' : 'odd.')
}
evenOrOdd(11);

//Task 2: Write a function to calculate the square of a number and return the result.

function findSquare(number) {
    return Math.pow(number, 2);
}

const result = findSquare(12);
console.log(result);

//Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const maxOfTwo = function (num1, num2) {
    console.log(Math.max(num1, num2))
}
maxOfTwo(9, 5);

//Task 4: Write a function expression to concatenate two strings and return the result.

const concatThese = function (str1, str2) {
    return str1 + str2
}
const answer = concatThese('hello', 'people')
console.log(answer);

//Activity 3: Arrow Functions

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => {
    return num1 + num2
}
const solution = sum(12, 67);
console.log(solution);

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean.

const hasChar = (str, char) => str.includes(char)
console.log(hasChar('kjdfv', 'p'));

//Activity 4: Function Parameters and Default Values

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(param1, param2 = 1) {
    return param1 * param2;
}

console.log(product(2, 3));//6
console.log(product(3));//3



//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 22) {
    return `Hello ${name}, welocme to the ${age} club`
}
console.log(greet('shivayya', 1000000));
console.log(greet('shivayya'));

//Activity 5: Higher-Order Functions

//Task9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callNTimes(fn, num) {
    for (let i = 1; i <= num; i++) {
        fn();
    }
}
let calledCount = 1;
function callThis() {
    console.log(`I am called ${calledCount} times.`);
    calledCount++;
}

callNTimes(callThis, 5);

//Task10: Write a higher-order function that takes two functions and a value, and applies the first function to the value, and then applies the second function to the result.

function hof(fn1, fn2, value) {
    console.log(fn2(fn1(value)));
}

function one(value) {
    return value * 2;
}

function two(value) {
    return value % 3;
}

hof(one, two, 5)