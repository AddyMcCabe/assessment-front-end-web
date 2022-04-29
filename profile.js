let colorBtn = document.getElementById('color-button');
let placeBtn = document.getElementById('place-button');
let ritualBtn = document.getElementById('ritual-button');

function useColorBtn() {
    let faveColor = document.createElement('p');
    faveColor.textContent = 'Red';
    document.querySelector('body').appendChild(faveColor);

}

function usePlaceBtn() {
    let favePlace = document.createElement('p');
    favePlace.textContent = 'Hawaii';
    document.querySelector('body').appendChild(favePlace);
}

function useRitualBtn() {
    let faveRitual = document.createElement('p');
    faveRitual.textContent = 'Mornings with the dogs';
    document.querySelector('body').appendChild(faveRitual);
}

colorBtn.addEventListener('click', useColorBtn)
placeBtn.addEventListener('click', usePlaceBtn)
ritualBtn.addEventListener('click', useRitualBtn)