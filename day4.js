//Day 4: Loops

//Tasks/Activities:

//Activity 1: For Loop

//Task 1: Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Task 2: Write a program to print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

//Activity 2: While Loop

//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using while loop
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
//Task 4: Write a program to print numbers from 10 to 1 using a while loop
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
//Activity 3: Do...While Loop

//Task 5: Write a program to print numbers from 1 to 5 using do...while loop
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
//Task 6: Write a program find the factorial of a number using a do...while loop
let num = 5;
let factorial = 1;
do {
    factorial *= num;
    num--;
} while (num >= 1);
console.log(factorial);

//Activity 4: Nested Loops

//Task 7: Write a program to print a pattern using nested for loops:

/*

* 
* *
* * *
* * * *
* * * * *

*/

for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}

//Activity 5: Loop Control Statements

//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    } else {
        console.log(i);
    }
}
//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    } else {
        console.log(i);
    }
}

