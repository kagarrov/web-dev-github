function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; // + to converter it to a number
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block'
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutoutElement.textContent= '';
    formElement.firstElementChild.lastElementChild.value = '';
    
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();//eliminate blank space in front or after

    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorsOutoutElement.textContent = 'Please enter a valid name';
        return; //stop execution of the function
    }

    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer-1].name = enteredPlayerName;
    closePlayerConfig();

}