//Day 8: ES6+ Features

//Tasks/Activities:

//Activity 1: Template Literals
//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = 'me';
const age = 100;
const details = `${name}, ${age} years old.`
console.log(details);

//Task2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `This 
is a
multi-line
string and the 
spaces,newlines 
are also preserved`;
console.log(multiLineString);

//Activity 2: Destructuring

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const [n1, n2] = [0, 6, 0, 8];
console.log(n1, n2);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = { title: 'Back in the old days using old ways!', author: 'Mr. Sumukh@R' };
const { title, author } = book;
console.log(title, author);

//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arr1 = [1, 2, 3, 4]
const arr2 = [...arr1, 5, 6]
console.log(arr1);
console.log(arr2);

//Task 6: Use the Rest operator in a function to accept a abritrary number of arguments, sum them, and return the result.
function restOperatorDemo(...args) {
    return args.reduce((ac, cv) => ac + cv, 0);
}
const result = restOperatorDemo(1, 2, 3, 4, 5);
console.log(result);

//Activity 4: Default parameters

//Task 7: Write a function that takes two prameters and returns their product, with the seocnd parameter having a default value of 1. Log the result of calling the function with and without the second parameter.

function defaultSecondParameter(a, b = 1) {
    return a * b
}

const prod1 = defaultSecondParameter(5, 2);
const prod2 = defaultSecondParameter(5);
console.log(prod1, prod2);

//Activity 5: Enhanced Object Literals

//Task 8: Use enhanced object literals to crate an object with methods and properties, and log the object to the console.

//ok so enhanced object literals means the new ways to define properties and methods of an object
//They are shorthand property,method names
//method definitions
//computed property names

const prop1 = 'This is a prop'
const naam = 'Abcd';
const umr = 222;

const user = {
    naam, //shorthand here it becomes naam: 'Abcd'
    umr, //same goes for this
    [prop1]: 'You used computed value as a prop for this value',
    greet() {
        console.log('this is a method definition')
    }
}

console.log(user);
user.greet();

//Task 9: Create an object with computed property names based on variables and log the object yo the console.
const user2 = {
    [prop1]: 'I did this in above example only, but anyways doing it now also',
    'name': 123
}
console.log(user2[prop1]);//works fine and we will get the respective value
console.log(user2.prop1);//undefined
