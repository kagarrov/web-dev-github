let inputText = document.querySelector('input');
console.log(inputText);

function countLetters() {
    let numberLetters = inputText.value;
    let counter = document.querySelector('span');
    let remainingLetters = 60 - numberLetters.length;
    counter.textContent = remainingLetters;

    if (remainingLetters > 10){
        inputText.style.backgroundColor = 'white';
     }

    if (remainingLetters <= 10){
        inputText.style.backgroundColor = 'rgb(234,193,151)';
        console.log(remainingLetters);
    } 

    if (remainingLetters < 5){
        inputText.style.backgroundColor = 'red';
        console.log(remainingLetters);
    } 
    
}

inputText.addEventListener('input', countLetters);
