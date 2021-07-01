//******** Variables

const bookingButton = document.querySelector('#submit');
const confirmationDiv = document.querySelector('.confirmation-container');
const datePickUp = document.querySelector('#reservation-date');
const timePickUp = document.querySelector('#reservation-time');
const numberPickUp = document.querySelector('#reservation-number');


//******** Functions

const resetConfirmation = () => {
    confirmationDiv.classList.remove('confirmation-show-success');
    confirmationDiv.classList.remove('confirmation-show-error');
}

const confirmationGeneration = (dateConfirm, timeConfirm, numberConfirm) => {

    resetConfirmation();

    // Get the current date and formate it
    const now = new Date();
    let currentDay = now.getDate();
    let currentMonth = now.getMonth() + 1;
    let currentYear = now.getFullYear();

    const confirmDateArray = dateConfirm.split("-");
    const confirmDateFormated = `${confirmDateArray[2]}/${confirmDateArray[1]}/${confirmDateArray[0]}`;

    if(currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
    }

    if(currentDay < 10) {
        currentDay = `0${currentDay}`;
    }

    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;


    // Test if all the options exist and if the picked up date is not outdated

    if((dateConfirm) && (timeConfirm) && (numberConfirm)) {
        if(dateConfirm < currentDate) {
            confirmationDiv.classList.add('confirmation-show-error');
            confirmationDiv.innerHTML = `La date choisie n'est pas valide`;
        } else {
            let formatedDateConfirm = 
            confirmationDiv.classList.add('confirmation-show-success');
            confirmationDiv.innerHTML = `Réservation confirmé pour ${numberConfirm} personne(s) le ${confirmDateFormated} à ${timeConfirm}`;
        }
    } else {
        confirmationDiv.classList.add('confirmation-show-error');
        confirmationDiv.innerHTML = `Une erreur s'est produite lors de la réservation`;
    }

    // Effect to hide the confirmation div

    setInterval(() => {
        resetConfirmation();
        confirmationDiv.innerHTML = "";
    }, 5000);
}



//******** Events



bookingButton.addEventListener('click', () => {
    confirmationGeneration(datePickUp.value, timePickUp.value, numberPickUp.value);
});


datePickUp.setAttribute('min',new Date());