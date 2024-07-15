//Day 3: Control Structures

//Tasks/Activities

//Activity 1: If-Else Statements
//Task 1: Write a program to check if a number is positive, negative or zero and log the result to the console
const num = 0;
if (num < 0) {
    console.log(`${num} is negative`);
} else {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else {
        console.log(`${num} is zero itself`);
    }
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console
const age = 19;
if (age >= 18) {
    console.log('person is eligible to vote');
} else {
    console.log('person is not eligible to vote');
}

//Activity 2: Nested If-Else Statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements
const a = 12;
const b = 15;
const c = 14;

if (a > b && a > c) {
    console.log(`${a} is greatest`);
} else if (b > a && b > c) {
    console.log(`${b} is greatest`);
} else {
    console.log(`${c} is greatest`);
}

//Activity 3: Switch Case

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the result to the console
const day = 3;
switch (day) {
    case 1: console.log('sunday'); break;
    case 2: console.log('monday'); break;
    case 3: console.log('tuesday'); break;
    case 4: console.log('wednesday'); break;
    case 5: console.log('thursday'); break;
    case 6: console.log('friday'); break;
    case 7: console.log('saturday'); break;
    default: console.log('please enter a valid number (1-7)');
}

//Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console
//I am giving the grades based on the range since switch cannot support ranges I am using Math.ceil to round teh rang to their nearest 10 multiplier

const score = 1000;
let grade;
switch (Math.ceil(score / 10)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        grade = 'F';
        break;
    case 7:
        grade = 'D';
        break;

    case 8:
        grade = 'c';
        break;

    case 9:
        grade = 'B';
        break;

    case 10:
        grade = 'A';
        break;
    default:
        console.log('please enter the score in the range (0-100)');

}
grade && console.log(grade); //only if grade exists print it

//Activity 4: Conditional (Ternary) Operator

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
const checkThis = 13;
console.log(checkThis % 2 === 0 ? `${checkThis} is even` : `${checkThis} is odd`);

//Activity 5: Combining Conditions

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

const year = 1604;
const result = (year % 4 === 0) ? (year % 100 === 0 ? (year % 400 === 0 ? 'leap year' : 'normal year') : 'leap year') : 'normal year';
console.log(`${year} is a ${result}`);