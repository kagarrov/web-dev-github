let paragraphElment = document.querySelector('p');

function changeParagraphText(){
    paragraphElment.textContent = 'Clicked!';
    console.log('Paragraph clicked');
}
paragraphElment.addEventListener('click', changeParagraphText); //callback function


let inputElement = document.querySelector('input');

function RetrieveUserInput(event){
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data;
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener( 'input' , RetrieveUserInput);