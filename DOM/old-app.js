// document.body.children[1].children[0].href = 'https://www.google.com/';
let anchorElement = document.getElementById('external-id');
anchorElement.href = 'https://www.google.com/';

anchorElement = document.querySelector('#external-id');
anchorElement.href = 'https://www.amazon.com/';

// document.getElementById('some-id')
// document.querySelector('<some-css-selector>')
// document.querySelectorAll('<some-css-selector>')
// document.getElementsByClassName('some-css-class')
// document.getElementsByTagName('tag')

// ADD AN ELEMENT

//1. Create new element

let newAnchorElement = document. createElement('a');
newAnchorElement.href = 'https://www.google.com/';
newAnchorElement.textContent = 'hola';

//2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

//3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS

// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');
// 2. Remove it
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); //for older browsers

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML 

firstParagraph.innerHTML = 'Hi! this is <strong> important! </strong>'