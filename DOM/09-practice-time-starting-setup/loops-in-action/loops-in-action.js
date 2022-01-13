// First example: Sum number

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;
    for (let i=0; i <= enteredNumber; i++){
        sumUpToNumber = sumUpToNumber + i;
    }
    
    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// Hightlight Link Exercises

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks(params) {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

//Display user data

const dummyUserData = {
    firstName : 'Andreina',
    lastName : 'Garro',
    age : 26,
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function DisplayUserData() {
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = '';

    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', DisplayUserData);

//Statics  / Roll Dice Example

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random()*6) + 1;
    
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    console.log(targetNumberInputElement);
    const diceRollListElement = document.getElementById('dice-rolls');
    console.log(diceRollListElement);

    const enteredNumber = targetNumberInputElement.value;
    diceRollListElement.innerHTML = ' ';

    let hasRolledTargetNumber = false;
    let numberOfRoles = 0;
    
    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber){
        //     hasRolledTargetNumber = true;
        // }
        numberOfRoles = numberOfRoles + 1;
        const newRollListElementItem = document.createElement('li');
        const outputText = 'Roll' + numberOfRoles + ': ' + rolledNumber;
        newRollListElementItem.textContent = outputText;
        diceRollListElement.append(newRollListElementItem);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRoles;

}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);