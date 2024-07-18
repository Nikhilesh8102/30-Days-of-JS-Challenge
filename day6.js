//Day 6: Arrays

//Tasks/Activities:

//Activity 1: Array Creation and Access

//Task 1: Create an array of numbers from 1 to 5 and log the result to the console.
const task1 = [1, 2, 3, 4, 5];
console.log(task1);
//Task 2: Access the first and the last element from the array and log them to the console.
console.log(task1[0], task1[4]);

//Activity 2: Array Methods (Basic)

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const pushResult = task1.push(6)
console.log(pushResult, task1);
//Task 4: Use the pop method to remove the last number from the array and log the updated array.
const poppedFromTask1 = task1.pop();
console.log(poppedFromTask1, task1);
//Task 5: Use the shift method to remove teh first element from the array and log the updated array.
const shiftedFromTask1 = task1.shift();
console.log(shiftedFromTask1, task1);
//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const unshiftResult = task1.unshift(6)
console.log(unshiftResult, task1);

//Activity 3: Array Methods (Intermediate)

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const task7 = task1.map(element => element * 2)
console.log(task7);
//Task 8: Use the filter method to create a new array with only even numbers and log the result.
const task8 = task1.filter(element => !(element % 2))
console.log(task8);
//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const task9 = task1.reduce((ac, cv) => ac + cv, 0);
console.log(task9);

//Activity 4: Array Iteration

//Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < task1.length; i++) {
    console.log(task1[i]);
}
//Task 11: Use the forEach method to iterate over the array and log each element to the console.
task1.forEach(element => {
    console.log(element);
})

//Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const task12 = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
console.log(task12);
//Task 13: Access and log a specific element from the two-dimensional array.
console.log(task12[2][1]);