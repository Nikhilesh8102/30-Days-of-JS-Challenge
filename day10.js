//Day 10: Event Handling

//Task 1: Add a click event listener to a button that changes the context of a paragraph.
document.querySelector('button').addEventListener('click', function (e) {
    document.querySelector('p').textContent = 'The content got changed'
})
//Task 2: Add a double-click event listener to an image that toggles its visibility.
document.querySelector('img').addEventListener('dblclick', function (e) {
    console.log('clicked');
    this.style.display = 'none'
})
//Task 3: Add a mouseover event listener to an element that changes its background color.
document.querySelector('p').addEventListener('mouseover', function (e) {
    this.style.backgroundColor = 'crimson'
})
//Task 4: Add a mouseout event listener to an element that resets its background color.
document.querySelector('p').addEventListener('mouseout', function (e) {
    this.style.backgroundColor = 'white'
})
//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.querySelector('input').addEventListener('keydown', function (e) {
    console.log(e.key);
})
//Task 6: Add a keyup event listener to an input field that displays the current value in a paragarph.
document.querySelector('input').addEventListener('keyup', function (e) {
    const p = document.createElement('p');
    p.innerText = `The content of input field is ${e.target.value}`
    document.body.appendChild(p)
})
//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(this);

    // Log the contents of the FormData object
    for (let pair of data.entries()) {
        console.log(pair[0] + ': ' + pair[1]); // Logs the key and value of each form field
    }
})
//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.querySelector('select').addEventListener('change', function (e) {
    const p = document.createElement('p');
    p.innerText = `The selected value is ${e.target.value}`
    document.body.appendChild(p)
})
//Task 9: Add a click event listener to a list that logs the content of the clicked list item using event delegation.
document.querySelector('ul').addEventListener('click', function (e) {
    console.log(e.target.innerText);
})
//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.querySelector('ul').addEventListener('click', function (e) {
    addChild(this);
    if (e.target.classList.contains('dynamic-child')) {
        console.log('dynamically added child clicked');
    }
})
function addChild(parent) {
    const div = document.createElement('div');
    div.innerText = 'Dynamically added child'
    div.classList.add('dynamic-child')
    parent.appendChild(div)
}


