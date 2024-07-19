//Day 7: Objects

//Tasks/Activities:

//Activity 1: Object Creation and Access

//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: 'Dark light in the woods',
    author: 'Mr. Sumukh@R',
    year: 2024
}
console.log(book);
//Task 2: Access and log the title and author properties of the book object.
const title = book.title;
const author = book.author;
console.log(`title: ${title}\nauthor: ${author}`);

//Activity 2: Object Methods

//Task 3: Add a method to the book object that retuns a string with book's title and author and log the result of calling this method.
book.getDetails = function () {
    return `title: ${this.title}\nauthor: ${this.author}`;
}
const details = book.getDetails();
console.log(details);
//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (year) {
    this.year = year;
}
book.updateYear(2023);
console.log(book.year);

//Activity 3: Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: 'The Central University Library',
    books: [book, book, book] // for simplicity I have added the same book multiple times
}
console.log(library);
//Task 6: Access and log librarys name and titles of all the books in the library.
const libraryName = library.name;
const bookNames = [];
for (let book of library.books) {
    bookNames.push(book.title)
}
console.log(`libraryName: ${libraryName}\nbookNames:${bookNames}`);

//Activity 4: The this keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function () {
    return `title: ${this.title} year: ${this.year}`
}
console.log(book.getTitleAndYear())

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (prop in book) {
    console.log(prop, book[prop])
}
//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));