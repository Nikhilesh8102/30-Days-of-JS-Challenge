// Tasks/Activities

//Activity 1: Variable Declaration
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 123;
console.log(num);
//Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = 'Hello world';
console.log(str);

//Activity 2: Constant Declaration
//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const value = true;
console.log(value);

//Activity 3: Data Types
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
//since I am not doing any operations on these values I will use const to declare them
const num1 = 10;
const str1 = 'abcde';
const bool1 = false;
const arr1 = [1, 2, 3, 4];
const obj1 = { name: 'obj1', propsNum: 2 }
console.log(num1, typeof num1, str1, typeof str1, bool1, typeof bool1, arr1, typeof arr1, obj1, typeof obj1)

//Activity 4: Reassigning Variables
//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console
let someVar = '123';
console.log(someVar);
someVar = 123;//Type Error: Assignment to constant variable
console.log(someVar);

//Activity 5: Understanding const
//Task 6: Try reassigning a variable declared with connst and observe the error
const anotherVar = 123;
console.log(anotherVar);
anotherVar = '123';
console.log(anotherVar);