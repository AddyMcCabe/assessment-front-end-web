console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}

function handleMouseOver() {
	alert('thank you for petting Mr Nice')
}

let catPic = document.getElementById('catPic');
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('mouseover', handleMouseOver);