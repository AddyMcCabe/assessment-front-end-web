let colorBtn = document.getElementById('color-button');
let placeBtn = document.getElementById('place-button');
let ritualBtn = document.getElementById('ritual-button');

function useColorBtn() {
    // let faveColor = document.createElement('p');
    // faveColor.textContent = 'My favorite color is red';
    // document.querySelector('body').appendChild(faveColor);
    alert('My favorite color is red');
}

function usePlaceBtn() {
    // let favePlace = document.createElement('p');
    // favePlace.textContent = 'My favorite place ive been is Hawaii';
    // document.querySelector('body').appendChild(favePlace);
    alert('My favorite place ive been is Hawaii');
}

function useRitualBtn() {
    // let faveRitual = document.createElement('p');
    // faveRitual.textContent = 'Mornings with the dogs';
    // document.querySelector('body').appendChild(faveRitual);
    alert('Mornings with my dogs')
}

colorBtn.addEventListener('click', useColorBtn);
placeBtn.addEventListener('click', usePlaceBtn);
ritualBtn.addEventListener('click', useRitualBtn);