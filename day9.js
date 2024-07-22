//Day 9: DOM Manipulation

//#heading
//.para
//img
//Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('heading').textContent = 'This is the heading.';
//Task 2: Select an HTML element by its class and change its background color.
document.querySelector('.para').style.backgroundColor = 'lightblue';
// //Task 3: Create a new div element with some text content and append it to the body.
const div = document.createElement('div');
div.textContent = 'This is a div created using javascript and appended it to body'
document.body.appendChild(div);
// //Task 4: Create a new li element and add it to an existing ul list
const li = document.createElement('li');
li.innerText = 'This list item is added via javascript'
document.querySelector('ul').appendChild(li);
// //Task 5: Select an HTML element and remove it from the DOM.
document.querySelector('li:nth-child(2)').remove();
// //Task 6: Remove the last child of a specific HTML element.
document.body.lastElementChild.remove();
// //Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
document.querySelector('img').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-pp0GxNxSQVDgzkK6VXhJgtbHabF5rUUcQ&s';
// //Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector('#heading').classList.add('fill');
document.querySelector('#heading').classList.remove('fill');
// //Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.querySelector('button').addEventListener('click', function (e) {
    document.querySelector('.para').textContent = 'The content got changed'
})
// //Task 10: Add a mouseover event listener to an element that chanegs its borer color
document.querySelector('.para').addEventListener('mouseover', function (e) {
    this.style.border = '1px solid blue'
})
